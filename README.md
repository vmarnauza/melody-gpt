# Melody GPT

A ChatGPT music composer with export to MIDI.

[https://melody-gpt.netlify.app](https://melody-gpt.netlify.app)

## Getting Started

Set up an `.env.local` file with your OpenAI API key and organization ID. See `.env.sample` for reference.

Install NPM packages:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Fine-tuning

Add training MIDI files in `backend/fine-tune/midi`. Sort them in folders named according to the user prompt that they should be associated with.

Run fine-tuning with NPM:

```bash
npm run tune
```

Once fine-tuning completes add your fine-tuned model ID to `.env.local` as `OPENAI_MODEL_ID`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
