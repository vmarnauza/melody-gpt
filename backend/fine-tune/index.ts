import dotenv from "dotenv";
import { readFileSync, readdirSync } from "fs";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "..", "..", ".env.local"),
});

const fineTune = (files: Buffer[]) => {
  console.log(`Got ${files.length} files for fine-tuning.`);
};

const readMidis = () => {
  const fileList = readdirSync(path.join(__dirname, "midi"));
  const files: Buffer[] = [];

  fileList.forEach((fileName) => {
    console.log(`Reading ${fileName}`);

    const file = readFileSync(path.join(__dirname, "midi", fileName));
    files.push(file);
  });

  return files;
};

const files = readMidis();
fineTune(files);
