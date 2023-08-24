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
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a music composer that creates music matching certain genres, vibes, styles and tempos. Respond with a JSON object containing two properties - 'melody' and 'chords'. The 'melody' property should be an array with the following format [('note', string TIME_DIVISION to represent duration, string TIME_DIVISION to represent rest between previous and current note)]. The 'chords' property should contain an array of chords with each chord following the format [('chord', string TIME_DIVISION to represent duration, string TIME_DIVISION to represent rest between previous and current chord)]. TIME_DIVISION can't be empty strings and must be one of '1', '2', '4', '8', '16', '32', '64' with added 'd' or 'dd' for dotted or double dotted divisions. TIME_DIVISION that represent rests can also be '0' if the notes are joined seamlessly. For example, chords: [['Cmaj7','4','0'],['Dm','8','8'],['Esus4','4d','2']], melody: [['C#4','8','0'],['D4','4','2'],['F4','4','4d']] Adhere to the format outlined above exactly and do not add any additional text. Generate as many bars of music as requested by the user.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    max_tokens: 2000,
    temperature: body.temperature || 1.5,
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
    const midi = createMidi(music, prompt);

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
  bpm,
  bars = 4,
  customText,
}: GenerateRequestBody) => {
  let prompt = "";

  if (genre) prompt += genre;
  if (vibe) prompt += `, ${vibe}`;
  if (style) prompt += `, ${style}`;
  if (bpm) prompt += `, ${bpm} bpm`;
  if (bars) prompt += `, ${bars} bars`;
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

const createMidi = (music: Music, prompt: string) => {
  const melodyTrack = new MidiWriter.Track();
  const melodyNotes = music.melody.map(([pitch, duration, wait]) => {
    return new MidiWriter.NoteEvent({
      pitch: pitch as Pitch,
      duration: duration as Duration,
      wait: wait as Duration,
      sequential: !wait || wait === "0",
    });
  });
  melodyTrack.addEvent(melodyNotes);
  melodyTrack.addTrackName(prompt);

  const chordTrack = new MidiWriter.Track();
  const chordNotes = music.chords.map(([pitch, duration, wait]) => {
    const chord = chords[pitch];

    if (!chord) {
      throw new Error(`Invalid chord: ${pitch}`);
    }

    return new MidiWriter.NoteEvent({
      pitch: chord as Pitch[],
      duration: duration as Duration,
      wait: wait as Duration,
    });
  });
  chordTrack.addEvent(chordNotes);
  chordTrack.addTrackName(prompt);

  const melodyWriter = new MidiWriter.Writer(melodyTrack);
  const chordWriter = new MidiWriter.Writer(chordTrack);

  return {
    melody: melodyWriter.dataUri(),
    chords: chordWriter.dataUri(),
  };
};
