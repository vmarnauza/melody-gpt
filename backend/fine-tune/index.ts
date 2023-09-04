import dotenv from "dotenv";
import { readFileSync, readdirSync } from "fs";
import path from "path";
import { Midi } from "@tonejs/midi";

dotenv.config({
  path: path.join(__dirname, "..", "..", ".env.local"),
});

const fineTune = (midis: Midi[]) => {
  console.log(`Got ${midis.length} files for fine-tuning.`);
  // console.log(midis[0].toJSON());
  midis[0].toJSON().tracks.forEach((track) => {
    console.log(`Track ${track.name}`);
    track.notes.forEach((note) => {
      console.log(note);
    });
  });
};

const readMidis = () => {
  const fileList = readdirSync(path.join(__dirname, "midi"));
  const midis: Midi[] = [];

  fileList.forEach((fileName) => {
    console.log(`Reading ${fileName}`);

    const file = readFileSync(path.join(__dirname, "midi", fileName));
    const midi = new Midi(file);

    midis.push(midi);
  });

  return midis;
};

const midis = readMidis();
fineTune(midis);
