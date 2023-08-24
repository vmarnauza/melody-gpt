export interface GenerateRequestBody {
  genre: string;
  vibe: string;
  style: string;
  bpm?: number;
  bars?: number; // bars
  customText?: string;
  temperature?: number;
}

export interface GenerateResponseBody {
  music: Music;
  midi: Midi;
}

export type Note = Array<string>;
export type Chord = Array<string>;

export interface Music {
  melody: Array<Note>;
  chords: Array<Chord>;
}

export interface Midi {
  melody: string;
  chords: string;
}
