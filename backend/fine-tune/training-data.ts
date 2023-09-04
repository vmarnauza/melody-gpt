import path, { extname } from "path";
import { readFileSync, readdirSync, statSync, writeFileSync } from "fs";
import { Midi } from "@tonejs/midi";
import { Melody } from "@/types/api";
import { createSystemPrompt } from "../prompt";

type MidiData = Record<string, Midi[]>;
interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}
interface TrainingItem {
  messages: Message[];
}
type TrainingData = TrainingItem[];

const readMidis = () => {
  const folderList = readdirSync(path.join(__dirname, "midi")).filter(
    (folderName) => {
      return statSync(path.join(__dirname, "midi", folderName)).isDirectory();
    }
  );
  const midis: MidiData = {};

  folderList.forEach((folderName) => {
    console.log(`Reading folder ${folderName}`);

    const fileList = readdirSync(
      path.join(__dirname, "midi", folderName)
    ).filter((fileName) => extname(fileName) === ".mid");

    midis[folderName] = [];
    fileList.forEach((fileName) => {
      console.log(`Reading file ${fileName}`);

      const file = readFileSync(
        path.join(__dirname, "midi", folderName, fileName)
      );
      const midi = new Midi(file);

      midis[folderName].push(midi);
    });
  });

  return midis;
};

const midiToGptResponse = (midi: Midi) => {
  const response = {
    music: {
      result: [] as Melody,
    },
  };

  midi.toJSON().tracks.forEach((track) => {
    track.notes.forEach((note) => {
      response.music.result.push({
        pitch: note.name,
        duration: note.duration,
        startTime: note.time,
      });
    });
  });

  return response;
};

const midisToTrainingData = (midiData: MidiData) => {
  const trainingData: TrainingData = [];

  for (const [prompt, midis] of Object.entries(midiData)) {
    midis.forEach((midi) => {
      const response = midiToGptResponse(midi);
      trainingData.push({
        messages: [
          {
            role: "system",
            content: createSystemPrompt(),
          },
          {
            role: "user",
            content: prompt,
          },
          {
            role: "assistant",
            content: JSON.stringify(response),
          },
        ],
      });
    });
  }

  return trainingData;
};

export const createTrainingData = () => {
  const midiData = readMidis();
  const trainingData = midisToTrainingData(midiData);

  writeFileSync(path.join(__dirname, "training-data.jsonl"), "");
  trainingData.forEach((item) => {
    writeFileSync(
      path.join(__dirname, "training-data.jsonl"),
      JSON.stringify(item) + "\n",
      { flag: "a" }
    );
  });
};
