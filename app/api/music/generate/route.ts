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
  console.log(prompt);
  const response = await openai.chat.completions.create({
    // model: "gpt-4-0613",
    // messages: [
    //   {
    //     role: "system",
    //     content:
    //       "You are a music composition assistant. When a user gives you a prompt you must return a text representation of the chords and melody with their pitches and durations, and also durations between them. Compose music that fits the user's request perfectly, matching the vibe, genre and style they want.",
    //   },
    //   {
    //     role: "user",
    //     content: prompt,
    //   },
    // ],
    // functions: [
    //   {
    //     name: "generate_music",
    //     description: "Generate melody and chord progression.",
    //     parameters: {
    //       type: "object",
    //       properties: {
    //         melody: {
    //           type: "array",
    //           description:
    //             "The melody for the chord progression expressed in text as an array of note objects.",
    //           items: {
    //             type: "object",
    //             description: "Note object.",
    //             properties: {
    //               pitch: {
    //                 type: "string",
    //                 description: "Note pitch.",
    //               },
    //               duration: {
    //                 type: "number",
    //                 description:
    //                   "The note's duration in beats expressed as a float.",
    //               },
    //               wait: {
    //                 type: "number",
    //                 description:
    //                   "The time between previous and next note in beats expressed as a float.",
    //               },
    //             },
    //           },
    //         },
    //         chords: {
    //           type: "array",
    //           description:
    //             "The chord progression for the melody expressed in text as an array of chord objects.",
    //           items: {
    //             type: "object",
    //             description: "Chord object.",
    //             properties: {
    //               chord: {
    //                 type: "string",
    //                 description: "The chord without spaces.",
    //               },
    //               duration: {
    //                 type: "number",
    //                 description:
    //                   "The note's duration in beats expressed as a float.",
    //               },
    //               wait: {
    //                 type: "number",
    //                 description:
    //                   "The time between previous and next note in beats expressed as a float.",
    //               },
    //             },
    //           },
    //         },
    //       },
    //       required: ["melody", "chords"],
    //     },
    //   },
    // ],
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a music composer. When asked by the user, try to create melody and chords that closely match their prompt. " +
          "Respond with a JSON object containing two properties: 'melody' and 'chords'. " +
          "The melody property must be an array of note objects. Each note object contains properties for 'pitch', 'duration' and 'wait'. " +
          "The chords property must be an array of chord objects. Each chord object contains properties for 'chord', 'duration' and 'wait'. " +
          "The 'pitch' property is a string representing the note pitch. " +
          "The 'chord' property is a string representing the chord without spaces. " +
          "The 'duration' property is the note's duration in beats expressed as a float. " +
          "The 'wait' property is the time between previous and next note in beats expressed as a float. " +
          "Adhere to the format outlined above exactly and do not add any additional text. Generate as many bars of music as requested by the user.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    max_tokens: 2000,
    temperature: body.temperature || 1.2,
  });

  // const message = response.choices[0].message.function_call?.arguments;
  const message = response.choices[0].message.content;

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
  if (bars)
    prompt += `. Create melody and chords for a total duration of ${
      bars * 4
    } beats of music`;
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
