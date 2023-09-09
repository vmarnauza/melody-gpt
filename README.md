# Melody GPT

A ChatGPT music composer with export to MIDI. Currently uses a fine-tuned version of gpt-3.5-turbo.

[https://melody-gpt.uc.r.appspot.com](https://melody-gpt.uc.r.appspot.com)

## Requirements

This is a [Next.js](https://nextjs.org/) project and requires [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/).

## Getting Started

Set up an `.env.local` file in project root with your OpenAI API key and organization ID. See `.env.sample` for reference.

Install NPM packages:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Fine-tuning

Add training MIDI files in `backend/fine-tune/midi`. Sort them in folders named according to the user prompt that they should be associated with. For example if a MIDI file should be the result for prompt `angry vaporwave in the style of brian eno` then put it in a folder that has the prompt as its name.

Run fine-tuning with NPM:

```bash
npm run tune
```

Fine-tuning first takes all your training MIDI files and creates `training-data.jsonl`, which is the file to be uploaded to OpenAI for fine-tuning. Before the upload happens you will be asked to confirm that you want to proceed with fine-tuning.

Once fine-tuning completes add your fine-tuned model's ID to `.env.local` as the value for the `OPENAI_MODEL_ID` variable.
