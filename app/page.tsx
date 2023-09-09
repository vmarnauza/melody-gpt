"use client";

import Button from "@/components/button";
import Header from "@/components/header";
import { genres, vibes } from "@/modules/params";
import { GenerateRequestBody, GenerateResponseBody, Midi } from "@/types/api";
import { useState } from "react";

export default function Home() {
  const [midi, setMidi] = useState<Midi | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [currentParams, setCurrentParams] = useState<string | null>(null);
  const [genre, setGenre] = useState<string>("pop");
  const [vibe, setVibe] = useState<string[]>(["calm", "cute"]);

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
    setMidi(null);
    setCurrentParams(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({
          vibe: vibe.join(", "),
          genre: genre,
        } as GenerateRequestBody),
      });

      if (!res.ok) {
        const errorMessage = (await res.json()).error || "Something went wrong";
        setError(errorMessage);
        setLoading(false);
        return;
      }

      const { music, midi } = (await res.json()).data as GenerateResponseBody;

      console.log(music);

      setMidi(midi);
      setCurrentParams(`${vibe.join(" ")} ${genre}`);
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

  const paramData = [
    {
      name: "Genre",
      value: genre,
      onChange: handleGenreChange,
      options: genres,
    },
    {
      name: "Vibe",
      value: vibe,
      onChange: handleVibeChange,
      multiple: true,
      options: vibes[genre],
    },
  ];

  const paramMarkup = paramData.map(
    ({ name, value, onChange, multiple, options }) => (
      <div className="flex flex-col gap-1" key={name}>
        <label htmlFor={name}>{name}</label>
        <select
          className={`border min-w-[200px] px-2 py-1 ${
            multiple ? "min-h-[200px]" : ""
          }`}
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

  const generateButtonText = loading ? "Loading..." : "Create music";
  const successMessageMarkup = Boolean(midi?.melody) ? (
    <>
      <div className="text-lg">🔥 Success!</div>
      <div className="flex gap-4">
        <Button
          onClick={() =>
            downloadUri(midi?.melody || "", `${currentParams}.mid`)
          }
          disabled={!Boolean(midi?.melody) || loading}
        >
          Download
        </Button>
      </div>
    </>
  ) : null;

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="flex gap-8">{paramMarkup}</div>
          <div className="flex flex-col gap-2">
            <div>
              <Button type="secondary" onClick={generateMusic}>
                {generateButtonText}
              </Button>
            </div>
            <p className="text-rose-600">{error}</p>
          </div>
          {successMessageMarkup}
        </section>
      </main>
    </>
  );
}
