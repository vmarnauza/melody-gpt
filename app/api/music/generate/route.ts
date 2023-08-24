import { openai } from "@/backend/openai";
import { GenerateRequestBody, Music } from "@/types/api";
import { NextRequest, NextResponse } from "next/server";
import MidiWriter, { Duration, Pitch } from "midi-writer-js";
import { chords } from "@/backend/chords";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!isRequestBodyValid(body)) {
    return NextResponse.json(
      {
        error: "Invalid request body",
      },
      {
        status: 400,
      }
    );
  }

  const prompt = createPrompt(body);
  const response = await openai.chat.completions.create({
    model: "gpt-4-0613",
    messages: [
      {
        role: "system",
        content:
          "You are a music composition assistant. When a user gives you a prompt you must return a text representation of the chords and melody with their pitches and durations, and also durations between them. Compose music that fits the user's request perfectly, matching the vibe, genre and style they want.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    functions: [
      {
        name: "generate_music",
        description: "Generate melody and chord progression.",
        parameters: {
          type: "object",
          properties: {
            melody: {
              type: "array",
              description:
                "The melody for the chord progression expressed in text as an array of note objects.",
              items: {
                type: "object",
                description: "Note object.",
                properties: {
                  pitch: {
                    type: "string",
                    description: "Note pitch.",
                  },
                  duration: {
                    type: "number",
                    description:
                      "The note's duration in beats expressed as a float.",
                  },
                  wait: {
                    type: "number",
                    description:
                      "The time between previous and next note in beats expressed as a float.",
                  },
                },
              },
            },
            chords: {
              type: "array",
              description:
                "The chord progression for the melody expressed in text as an array of chord objects.",
              items: {
                type: "object",
                description: "Chord object.",
                properties: {
                  chord: {
                    type: "string",
                    description: "The chord without spaces.",
                  },
                  duration: {
                    type: "number",
                    description:
                      "The note's duration in beats expressed as a float.",
                  },
                  wait: {
                    type: "number",
                    description:
                      "The time between previous and next note in beats expressed as a float.",
                  },
                },
              },
            },
          },
          required: ["melody", "chords"],
        },
      },
    ],
    // model: "gpt-3.5-turbo",
    // messages: [
    //   {
    //     role: "system",
    //     content:
    //       "You are a music composer. When asked by the user, try to create melody and chords that closely match their prompt. Respond with a JSON object containing two properties: 'melody' and 'chords'. The 'melody' property should be an array with the following format [('note', string TIME_DIVISION to represent duration, string TIME_DIVISION to represent rest between previous and current note)]. The 'chords' property should contain an array of chords with each chord following the format [('chord', string TIME_DIVISION to represent duration, string TIME_DIVISION to represent rest between previous and current chord)]. TIME_DIVISION can't be empty strings and must be one of '1', '2', '4', '8', '16', '32', '64' with added 'd' or 'dd' for dotted or double dotted divisions (for example, '1' is a whole note, '2' is a half note, '4' is a quarter note, '8' is an eighth note and '8d' is a dotted eighth note duration). TIME_DIVISION that represent rests can also be '0' if the notes are joined seamlessly. For example, chords: [['Cmaj7','4','0'],['Dm','8','8'],['Esus4','4d','2']], melody: [['C#4','8','0'],['D4','4','2'],['F4','4','4d']] This is just an example - feel free to use whatever chords you find appropriate. Adhere to the format outlined above exactly and do not add any additional text. Generate as many bars of music as requested by the user.",
    //   },
    //   {
    //     role: "user",
    //     content: prompt,
    //   },
    // ],
    max_tokens: 2000,
    temperature: body.temperature || 1.2,
  });

  const message = response.choices[0].message.function_call?.arguments;

  if (!message) {
    throw new Error("No message in response from OpenAI");
  }

  try {
    const json = message.slice(
      message.indexOf("{"),
      message.lastIndexOf("}") + 1
    );

    console.log("Message: ", message);

    const music = JSON.parse(json);
    const midi = createMidi(music, body.bpm, prompt);

    return NextResponse.json({
      data: {
        music,
        midi,
      },
    });
  } catch (error) {
    throw error;
  }
}

const createPrompt = ({
  genre,
  vibe,
  style,
  bars = 4,
  customText,
}: GenerateRequestBody) => {
  let prompt = "";

  if (vibe) prompt += vibe;
  if (genre) prompt += ` ${genre} music`;
  if (style) prompt += ` in style of ${style}`;
  // if (bars)
  //   prompt += `. Create melody and chords for a total duration of ${
  //     bars * 4
  //   } beats of music`;
  if (customText) prompt += `, ${customText}`;

  return prompt;
};

const isRequestBodyValid = (
  body: GenerateRequestBody
): body is GenerateRequestBody => {
  const { genre, vibe, style, bpm } = body;

  if (!genre || !vibe || !style || !bpm) return false;

  return true;
};

const createMidi = (
  music: Music,
  tempo: number | undefined = 120,
  prompt: string
) => {
  const melodyTrack = new MidiWriter.Track();
  const melodyNotes = music.melody.map(({ pitch, duration, wait }) => {
    const durationTicks = `T${duration * 128}`;
    const waitTicks = `T${wait * 128}`;
    return new MidiWriter.NoteEvent({
      pitch: pitch as Pitch,
      duration: durationTicks as Duration,
      wait: waitTicks as Duration,
      sequential: !wait || wait === 0,
    });
  });
  melodyTrack.addEvent(melodyNotes);
  melodyTrack.addTrackName(prompt);
  // melodyTrack.setTempo(tempo, 0);

  const chordTrack = new MidiWriter.Track();
  const chordNotes = music.chords.map(({ chord, duration, wait }) => {
    const chordNotes = chords[chord];

    if (!chord) {
      throw new Error(`Invalid chord: ${chord}`);
    }
    const durationTicks = `T${duration * 128}`;
    const waitTicks = `T${wait * 128}`;

    return new MidiWriter.NoteEvent({
      pitch: chordNotes as Pitch[],
      duration: durationTicks as Duration,
      wait: waitTicks as Duration,
    });
  });
  chordTrack.addEvent(chordNotes);
  chordTrack.addTrackName(prompt);
  // chordTrack.setTempo(tempo, 0);

  const melodyWriter = new MidiWriter.Writer(melodyTrack);
  const chordWriter = new MidiWriter.Writer(chordTrack);

  return {
    melody: melodyWriter.dataUri(),
    chords: chordWriter.dataUri(),
  };
};
