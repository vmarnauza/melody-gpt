import { openai } from "@/backend/openai";
import { GenerateRequestBody, Music } from "@/types/api";
import { NextRequest, NextResponse } from "next/server";
import { Midi } from "@tonejs/midi";
import { createPrompt, createSystemPrompt } from "@/backend/prompt";

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
    // model: "gpt-3.5-turbo",
    model: process.env.OPENAI_MODEL_ID || "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: createSystemPrompt(),
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    max_tokens: 2500,
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
    console.error(error);
    return NextResponse.json(
      {
        error: (error as Error).message,
      },
      {
        status: 500,
      }
    );
  }
}

const isRequestBodyValid = (
  body: GenerateRequestBody
): body is GenerateRequestBody => {
  const { genre, vibe, style } = body;

  if (!genre || !vibe || !style) return false;

  return true;
};

const createMidi = (music: Music) => {
  const midi = new Midi();
  const track = midi.addTrack();

  music.result.forEach(({ pitch, duration, startTime }) => {
    const note = pitch.slice(0, -1);
    const octave = parseInt(pitch.slice(-1));

    track.addNote({
      pitch: note,
      octave,
      time: startTime,
      duration,
    });
  });

  const buffer = Buffer.from(midi.toArray());
  const uri = `data:audio/midi;base64,${buffer.toString("base64")}`;

  return {
    melody: uri,
  };
};
