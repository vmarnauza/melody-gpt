import "./env";
import path from "path";
import { createReadStream, existsSync } from "fs";
import { openai } from "../openai";
import { createTrainingData } from "./training-data";

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

createTrainingData();
// fineTune();
