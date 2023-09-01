"use client";

import { genres, styles, vibes } from "@/modules/params";
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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [vibe, setVibe] = useState<string[]>(["calm", "natural"]);
  const [genre, setGenre] = useState<string>("lo-fi hip hop");
  const [style, setStyle] = useState<string>("j dilla");

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
    setError(null);
    setLoading(true);
    setMusic(null);
    setMidi(null);

    try {
      const res = await fetch("/api/music/generate", {
        method: "POST",
        body: JSON.stringify({
          vibe: vibe.join(", "),
          genre: genre,
          style: style,
        } as GenerateRequestBody),
      });

      const { music, midi } = (await res.json()).data as GenerateResponseBody;

      console.log(music);

      setMusic(music);
      setMidi(midi);

      setLoading(false);
    } catch (error) {
      const errorMessage = (error as Error).message || "Something went wrong";
      setError(errorMessage);
      setLoading(false);

      console.error(error);
    }
  };

  const handleVibeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVibe(Array.from(e.target.selectedOptions).map((option) => option.value));
  };
  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(e.target.value);
  };
  const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStyle(e.target.value);
  };

  const paramData = [
    {
      name: "vibe",
      value: vibe,
      onChange: handleVibeChange,
      multiple: true,
      options: vibes,
    },
    {
      name: "genre",
      value: genre,
      onChange: handleGenreChange,
      options: genres,
    },
    {
      name: "style",
      value: style,
      onChange: handleStyleChange,
      options: styles,
    },
  ];

  const paramMarkup = paramData.map(
    ({ name, value, onChange, multiple, options }) => (
      <div className="flex flex-col gap-1" key={name}>
        <label htmlFor={name}>{name}</label>
        <select
          className="border"
          multiple={multiple}
          id={name}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    )
  );

  const outputMarkup = (
    <div className="flex flex-col gap-1">
      <label htmlFor="output">Output</label>
      <textarea
        className="border"
        id="output"
        value={music ? JSON.stringify(music, null, 2) : ""}
        readOnly
        rows={10}
      />
    </div>
  );

  const buttonText = loading ? "Loading..." : "Generate Music";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-w-screen-lg w-full flex flex-col gap-8 py-8">
        <h1>Melody GPT</h1>
        <div className="flex gap-4">{paramMarkup}</div>
        <div>
          <button onClick={generateMusic}>{buttonText}</button>
          <p className="text-red">{error}</p>
        </div>
        {outputMarkup}
        <div className="flex gap-4">
          <button
            onClick={() => downloadUri(midi?.melody || "", "melody.mid")}
            disabled={!Boolean(midi?.melody) || loading}
          >
            Download Melody
          </button>
          <button
            onClick={() => downloadUri(midi?.chords || "", "chords.mid")}
            disabled={!Boolean(midi?.chords) || loading}
          >
            Download Chords
          </button>
          <button
            onClick={() => downloadUri(midi?.combined || "", "combined.mid")}
            disabled={!Boolean(midi?.combined) || loading}
          >
            Download Combined
          </button>
        </div>
      </section>
    </main>
  );
}
