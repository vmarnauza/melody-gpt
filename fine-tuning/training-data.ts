import path, { extname } from "path";
import { readFileSync, readdirSync, statSync, writeFileSync } from "fs";
import { Midi } from "@tonejs/midi";
import { Melody } from "@/types/api";
import { createSystemPrompt } from "../modules/prompt";
import { encode } from "gpt-tokenizer";

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
      return (
        statSync(path.join(__dirname, "midi", folderName)).isDirectory() &&
        !folderName.startsWith("_")
      );
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
    result: [] as Melody,
  };

  midi.toJSON().tracks.forEach((track) => {
    track.notes.forEach((note) => {
      response.result.push({
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
      const trainingDataItem: TrainingItem = {
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
      };

      const isItemOverTokenLimit =
        encode(JSON.stringify(trainingDataItem)).length > 4096;

      if (isItemOverTokenLimit) {
        console.log(
          `Skipping midi because it's over the token limit: ${midi.name}}`
        );
      } else {
        trainingData.push(trainingDataItem);
      }
    });
  }

  return trainingData;
};

export const createTrainingData = () => {
  const midiData = readMidis();
  const trainingData = midisToTrainingData(midiData);
  const trainingDataPath = path.join(__dirname, "training-data.jsonl");

  writeFileSync(trainingDataPath, "");
  trainingData.forEach((item) => {
    writeFileSync(
      path.join(__dirname, "training-data.jsonl"),
      JSON.stringify(item) + "\n",
      { flag: "a" }
    );
  });

  console.log(`Training data saved to ${trainingDataPath}`);
};
