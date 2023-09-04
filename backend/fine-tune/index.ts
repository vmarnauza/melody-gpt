import dotenv from "dotenv";
import {
  createReadStream,
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "fs";
import path from "path";
import { Midi } from "@tonejs/midi";
import { Melody } from "@/types/api";
import { createSystemPrompt } from "../prompt";
import { openai } from "../openai";

dotenv.config({
  path: path.join(__dirname, "..", "..", ".env.local"),
});

type MidiData = Record<string, Midi[]>;
interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}
interface TrainingItem {
  messages: Message[];
}
type TrainingData = TrainingItem[];

const fineTune = async () => {
  const trainingDataPath = path.join(__dirname, "training-data.jsonl");

  if (existsSync(trainingDataPath)) {
    let file = await openai.files.create({
      file: createReadStream(trainingDataPath),
      purpose: "fine-tune",
    });

    console.log(`Uploaded file with ID: ${file.id}`);

    console.log("-----");

    console.log(`Waiting for file to be processed`);
    while (true) {
      file = await openai.files.retrieve(file.id);
      console.log(`File status: ${file.status}`);

      if (file.status === "processed") {
        break;
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    console.log("-----");

    console.log(`Starting fine-tuning`);
    let fineTune = await openai.fineTunes.create({
      model: "gpt-3.5-turbo",
      training_file: file.id,
    });
    console.log(`Fine-tuning ID: ${fineTune.id}`);

    console.log("-----");

    console.log(`Track fine-tuning progress:`);

    const events: Record<string, unknown> = {};

    while (fineTune.status == "running" || fineTune.status == "created") {
      fineTune = await openai.fineTunes.retrieve(fineTune.id);
      console.log(`${fineTune.status}`);

      const { data } = await openai.fineTunes.listEvents(fineTune.id);
      for (const event of data.reverse()) {
        if (event.created_at in events) continue;

        events[event.created_at] = event;
        const timestamp = new Date(event.created_at * 1000);
        console.log(`- ${timestamp.toLocaleTimeString()}: ${event.message}`);
      }

      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
};

const readMidis = () => {
  const folderList = readdirSync(path.join(__dirname, "midi")).filter(
    (folderName) => {
      return statSync(path.join(__dirname, "midi", folderName)).isDirectory();
    }
  );
  const midis: MidiData = {};

  folderList.forEach((folderName) => {
    console.log(`Reading folder ${folderName}`);

    const fileList = readdirSync(path.join(__dirname, "midi", folderName));

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

  writeFileSync(path.join(__dirname, "training-data.jsonl"), "");
  trainingData.forEach((item) => {
    writeFileSync(
      path.join(__dirname, "training-data.jsonl"),
      JSON.stringify(item) + "\n",
      { flag: "a" }
    );
  });
};

const midis = readMidis();
midisToTrainingData(midis);
// fineTune();
