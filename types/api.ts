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

export type Note = {
  pitch: string;
  duration: number;
  wait: number;
};
export type Chord = {
  chord: string;
  duration: number;
  wait: number;
};

export interface Music {
  melody: Array<Note>;
  chords: Array<Chord>;
}

export interface Midi {
  melody: string;
  chords: string;
  combined: string;
}
