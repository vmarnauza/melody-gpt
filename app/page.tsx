"use client";

import {
  GenerateRequestBody,
  GenerateResponseBody,
  Midi,
  Music,
} from "@/types/api";
import { useState } from "react";

export default function Home() {
  const [music, setMusic] = useState<Music | null>(null);
  const [midi, setMidi] = useState<Midi | null>(null);
  const [loading, setLoading] = useState(false);

  function downloadUri(uri: string, name: string = "midi.mid") {
    if (!uri) return;

    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const generateMusic = async () => {
    setLoading(true);
    setMusic(null);
    setMidi(null);

    try {
      const res = await fetch("/api/music/generate", {
        method: "POST",
        body: JSON.stringify({
          vibe: "calm, natural",
          genre: "lofi hiphop",
          style: "j dilla",
          bpm: 90,
          // vibe: "happy",
          // genre: "jazz",
          // style: "charlie parker",
          // bpm: 160,
          // vibe: "atmospheric",
          // genre: "ambient",
          // style: "brian eno",
          // bpm: 60,
        } as GenerateRequestBody),
      });

      const { music, midi } = (await res.json()).data as GenerateResponseBody;

      console.log(music);

      setMusic(music);
      setMidi(midi);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const buttonText = loading ? "Loading..." : "Generate Music";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-w-screen-lg w-full flex flex-col gap-8 py-8">
        <h1>Melody Bot</h1>
        <div>
          <button onClick={generateMusic}>{buttonText}</button>
        </div>
        <p>{JSON.stringify(music, null, 2)}</p>
        <div className="flex gap-4">
          <button
            onClick={() => downloadUri(midi?.melody || "", "melody.mid")}
            disabled={!Boolean(midi) || loading}
          >
            Download Melody
          </button>
          <button
            onClick={() => downloadUri(midi?.chords || "", "chords.mid")}
            disabled={!Boolean(midi) || loading}
          >
            Download Chords
          </button>
        </div>
      </section>
    </main>
  );
}
