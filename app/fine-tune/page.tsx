"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export default function FineTune() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`submitting ${files.length} files`);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const titleMarkup = (
    <div className="flex flex-col gap-2">
      <h1>Fine Tune</h1>
      <p className="text-stone-600">
        Upload MIDI files to fine tune the model.
      </p>
    </div>
  );

  if (process.env.NODE_ENV !== "development") {
    return (
      <main>
        <section>
          <Link href="/">Back to home</Link>
          {titleMarkup}
          <p className="text-rose-600">
            This feature is not available in production.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section>
        <Link href="/">Back to home</Link>
        {titleMarkup}
        <form className="flex gap-4 items-center" onSubmit={handleSubmit}>
          <input
            ref={fileInputRef}
            type="file"
            accept="audio/midi"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files || []);
              setFiles(files);
            }}
          />
          <button type="submit" disabled={!Boolean(files.length)}>
            Upload
          </button>
        </form>
      </section>
    </main>
  );
}
