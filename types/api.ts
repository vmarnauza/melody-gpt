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
  startTime: number;
};

export interface Music {
  result: Melody;
  description: string;
}

export type Melody = Array<Note>;

export interface Midi {
  melody: string;
}
