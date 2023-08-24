import OpenAI from "openai";

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION,
};

export const openai = new OpenAI(configuration);
