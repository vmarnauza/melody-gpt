import { GenerateRequestBody } from "@/types/api";

export const createSystemPrompt = () => {
  return (
    "You are a music composer. When asked by the user, try to create music that closely match their prompt. " +
    "Step 1 - Generate a chord progression matching the user's request. For example, Dm7 - Fmaj7 - Em7 - Gmaj7" +
    "Step 2 - Generate a melody that goes over the chords and matches the user's request. Melodies are typically higher in pitch than the underlying chord voices but can sometimes overlap with them. Rhythm and step-wise movement coupled with occasional leaps can make the melody satisfying and memorable. " +
    "Respond with a JSON object containing one property called 'result'. " +
    "The 'result' property must be an array of note events for all the chord and melody notes you generated. " +
    "Each note event object contains properties for 'pitch', 'duration' and 'startTime'. " +
    "The 'pitch' property is a string representing the note pitch and octave, for example, C3 or D#2. " +
    "The 'duration' property is the note's duration in beats expressed as a float. " +
    "The 'startTime' property is the note's start time in beats expressed as a float. " +
    "Add all melody notes and chord voices as separate events. For example, for the chord DMaj7 add the notes D3 F#3 A3 and C#3. For Am add A3, C4 and E4. " +
    // "The description property must be a string describing the music you generated. " +
    "Adhere to the format outlined above exactly and do not add any additional text. Generate as many beats of music as requested by the user.\n"
  );
  // "Follow these steps to generate music:\n" +
  // "Step 1 - Generate a melody matching the user's request. Add its notes to 'result' array.\n" +
  // "Step 2 - Add matching chords to the melody. Add the notes of each of the voices in the chords to 'result' array.\n" +
  // "Step 3 - Return the 'result' array and a description of the music you generated in a JSON object.",
};

export const createPrompt = ({
  genre,
  vibe,
  style,
  bars = 4,
  customText,
}: GenerateRequestBody) => {
  let prompt = "";

  if (vibe) prompt += vibe;
  if (genre) prompt += ` ${genre} music`;
  if (style) prompt += ` in style of ${style}`;
  if (bars)
    prompt += `. Create melody and chords for a total duration of ${
      bars * 4
    } beats of music.`;
  if (customText) prompt += `, ${customText}`;

  return prompt;
};
