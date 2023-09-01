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
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a music composer. When asked by the user, try to create melody and chords that closely match their prompt. " +
          "Step 1 - Generate a chord progression matching the user's request. " +
          "Step 2 - Generate a melody that goes over the chords and matches the user's request. " +
          "Respond with a JSON object containing two properties: 'melody' and 'chords'. " +
          "The melody property must be an array of note objects. Each note object contains properties for 'pitch', 'duration' and 'wait'. " +
          "The chords property must be an array of chord objects. Each chord object contains properties for 'chord', 'duration' and 'wait'. " +
          "The 'pitch' property is a string representing the note pitch and octave, for example, C3 or D#2. " +
          "The 'chord' property is a string representing the chord without spaces, for example Cm or A7sus4. " +
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
    temperature: body.temperature || 1,
  });

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
    const midi = createMidi(music);

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
    } beats of music.`;
  if (customText) prompt += `, ${customText}`;

  return prompt;
};

const isRequestBodyValid = (
  body: GenerateRequestBody
): body is GenerateRequestBody => {
  const { genre, vibe, style } = body;

  if (!genre || !vibe || !style) return false;

  return true;
};

const createMidi = (music: Music) => {
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
  melodyTrack.addTrackName("melody");
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
  chordTrack.addTrackName("chords");
  // chordTrack.setTempo(tempo, 0);

  const melodyWriter = new MidiWriter.Writer(melodyTrack);
  const chordWriter = new MidiWriter.Writer(chordTrack);
  const combinedWriter = new MidiWriter.Writer([melodyTrack, chordTrack]);

  return {
    melody: melodyWriter.dataUri(),
    chords: chordWriter.dataUri(),
    combined: combinedWriter.dataUri(),
  };
};
