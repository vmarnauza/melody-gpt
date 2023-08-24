export const chords: Record<string, string[]> = {
  Cmaj: ["C3", "E3", "G3"],
  "C#maj": ["C#3", "F3", "G#3"],
  Dmaj: ["D3", "F#3", "A3"],
  "D#maj": ["D#3", "G3", "A#3"],
  Emaj: ["E3", "G#3", "B3"],
  Fmaj: ["F3", "A3", "C4"],
  "F#maj": ["F#3", "A#3", "C#4"],
  Gmaj: ["G3", "B3", "D4"],
  "G#maj": ["G#3", "C3", "D#4"],
  Amaj: ["A3", "C#4", "E4"],
  "A#maj": ["A#3", "D4", "F4"],
  Bmaj: ["B3", "D#4", "F#4"],

  Cm: ["C3", "D#3", "G3"],
  "C#m": ["C#3", "E3", "G#3"],
  Dm: ["D3", "F3", "A3"],
  "D#m": ["D#3", "F#3", "A#3"],
  Em: ["E3", "G4", "B4"],
  Fm: ["F3", "G#3", "C4"],
  "F#m": ["F#3", "A3", "C#4"],
  Gm: ["G3", "A#3", "D4"],
  "G#m": ["G#3", "B3", "D#4"],
  Am: ["A3", "C4", "E4"],
  "A#m": ["A#3", "C#4", "F4"],
  Bm: ["B3", "D4", "F#4"],

  C7: ["C3", "E3", "G3", "A#4"],
  "C#7": ["C#3", "F3", "G#3", "B4"],
  D7: ["D3", "F#3", "A3", "C3"],
  "D#7": ["D#3", "G3", "A#3", "C#4"],
  E7: ["E3", "G#3", "B3", "D4"],
  F7: ["F3", "A3", "C3", "D#4"],
  "F#7": ["F#3", "A#3", "C#3", "E3"],
  G7: ["G3", "B3", "D3", "F3"],
  "G#7": ["G#3", "C3", "D#3", "F#3"],
  A7: ["A3", "C#3", "E3", "G3"],
  "A#7": ["A#3", "D3", "F3", "G#3"],
  B7: ["B3", "D#3", "F#3", "A3"],
  Cm7: ["C3", "D#3", "G3", "A#3"],
  "C#m7": ["C#3", "E3", "G#3", "B3"],
  Dm7: ["D3", "F3", "A3", "C3"],
  "D#m7": ["D#3", "F#3", "A#3", "C#3"],
  Em7: ["E3", "G3", "B3", "D3"],
  Fm7: ["F3", "G#3", "C3", "D#3"],
  "F#m7": ["F#3", "A3", "C#3", "E3"],
  Gm7: ["G3", "A#3", "D3", "F3"],
  "G#m7": ["G#3", "B3", "D#3", "F#3"],
  Am7: ["A3", "C4", "E4", "G4"],
  "A#m7": ["A#3", "C#3", "F3", "G#3"],
  Bm7: ["B3", "D3", "F#3", "A3"],

  Cmin7: ["C3", "D#3", "G3", "A#3"],
  "C#min7": ["C#3", "E3", "G#3", "B3"],
  Dmin7: ["D3", "F3", "A3", "C3"],
  "D#min7": ["D#3", "F#3", "A#3", "C#3"],
  Emin7: ["E3", "G3", "B3", "D3"],
  Fmin7: ["F3", "G#3", "C3", "D#3"],
  "F#min7": ["F#3", "A3", "C#3", "E3"],
  Gmin7: ["G3", "A#3", "D3", "F3"],
  "G#min7": ["G#3", "B3", "D#3", "F#3"],
  Amin7: ["A3", "C4", "E4", "G4"],
  "A#min7": ["A#3", "C#3", "F3", "G#3"],
  Bmin7: ["B3", "D3", "F#3", "A3"],

  Cmaj7: ["C3", "E3", "G3", "B3"],
  "C#maj7": ["C#3", "F3", "G#3", "C3"],
  Dmaj7: ["D3", "F#3", "A3", "C#3"],
  "D#maj7": ["D#3", "G3", "A#3", "D3"],
  Emaj7: ["E3", "G#3", "B3", "D#3"],
  Fmaj7: ["F3", "A3", "C3", "E3"],
  "F#maj7": ["F#3", "A#3", "C#3", "F3"],
  Gmaj7: ["G3", "B3", "D3", "F#3"],
  "G#maj7": ["G#3", "C3", "D#3", "G3"],
  Amaj7: ["A3", "C#3", "E3", "G#3"],
  "A#maj7": ["A#3", "D3", "F3", "A3"],
  Bmaj7: ["B3", "D#3", "F#3", "A#3"],
  Csus4: ["C3", "F3", "G3"],
  "C#sus4": ["C#3", "F#3", "G#3"],
  Dsus4: ["D3", "G3", "A3"],
  "D#sus4": ["D#3", "G#3", "A#3"],
  Esus4: ["E3", "A3", "B3"],
  Fsus4: ["F3", "A#3", "C3"],
  "F#sus4": ["F#3", "B3", "C#3"],
  Gsus4: ["G3", "C3", "D3"],
  "G#sus4": ["G#3", "C#3", "D#3"],
  Asus4: ["A3", "D3", "E3"],
  "A#sus4": ["A#3", "D#3", "F3"],
  Bsus4: ["B3", "E3", "F#3"],
  C7sus4: ["C3", "F3", "G3", "A#3"],
  "C#7sus4": ["C#3", "F#3", "G#3", "B3"],
  D7sus4: ["D3", "G3", "A3", "C3"],
  "D#7sus4": ["D#3", "G#3", "A#3", "C#3"],
  E7sus4: ["E3", "A3", "B3", "D3"],
  F7sus4: ["F3", "A#3", "C3", "D#3"],
  "F#7sus4": ["F#3", "B3", "C#3", "E3"],
  G7sus4: ["G3", "C3", "D3", "F3"],
  "G#7sus4": ["G#3", "C#3", "D#3", "F#3"],
  A7sus4: ["A3", "D3", "E3", "G3"],
  "A#7sus4": ["A#3", "D#3", "F3", "G#3"],
  B7sus4: ["B3", "E3", "F#3", "A3"],
  C6: ["C3", "E3", "G3", "A3"],
  "C#6": ["C#3", "F3", "G#3", "A#3"],
  D6: ["D3", "F#3", "A3", "B3"],
  "D#6": ["D#3", "G3", "A#3", "C3"],
  E6: ["E3", "G#3", "B3", "C#3"],
  F6: ["F3", "A3", "C3", "D3"],
  "F#6": ["F#3", "A#3", "C#3", "D#3"],
  G6: ["G3", "B3", "D3", "E3"],
  "G#6": ["G#3", "C3", "D#3", "F3"],
  A6: ["A3", "C#3", "E3", "F#3"],
  "A#6": ["A#3", "D3", "F3", "G3"],
  B6: ["B3", "D#3", "F#3", "G#3"],
  Cmin6: ["C3", "D#3", "G3", "A3"],
  "C#min6": ["C#3", "E3", "G#3", "A#3"],
  Dmin6: ["D3", "F3", "A3", "B3"],
  "D#min6": ["D#3", "F#3", "A#3", "C3"],
  Emin6: ["E3", "G3", "B3", "C#3"],
  Fmin6: ["F3", "G#3", "C3", "D3"],
  "F#min6": ["F#3", "A3", "C#3", "D#3"],
  Gmin6: ["G3", "A#3", "D3", "E3"],
  "G#min6": ["G#3", "B3", "D#3", "F3"],
  Amin6: ["A3", "C3", "E3", "F#3"],
  "A#min6": ["A#3", "C#3", "F3", "G3"],
  Bmin6: ["B3", "D3", "F#3", "G#3"],
  Cdim: ["C3", "D#3", "F#3"],
  "C#dim": ["C#3", "E3", "G3"],
  Ddim: ["D3", "F3", "G#3"],
  "D#dim": ["D#3", "F#3", "A3"],
  Edim: ["E3", "G3", "A#3"],
  Fdim: ["F3", "G#3", "B3"],
  "F#dim": ["F#3", "A3", "C3"],
  Gdim: ["G3", "A#3", "C#3"],
  "G#dim": ["G#3", "B3", "D3"],
  Adim: ["A3", "C3", "D#3"],
  "A#dim": ["A#3", "C#3", "E3"],
  Bdim: ["B3", "D3", "F3"],
  Cdim7: ["C3", "D#3", "F#3", "A3"],
  "C#dim7": ["C#3", "E3", "G3", "A#3"],
  Ddim7: ["D3", "F3", "G#3", "B3"],
  "D#dim7": ["D#3", "F#3", "A3", "C3"],
  Edim7: ["E3", "G3", "A#3", "C#3"],
  Fdim7: ["F3", "G#3", "B3", "D3"],
  "F#dim7": ["F#3", "A3", "C3", "D#3"],
  Gdim7: ["G3", "A#3", "C#3", "E3"],
  "G#dim7": ["G#3", "B3", "D3", "F3"],
  Adim7: ["A3", "C3", "D#3", "F#3"],
  "A#dim7": ["A#3", "C#3", "E3", "G3"],
  Bdim7: ["B3", "D3", "F3", "G#3"],
  Caug: ["C3", "E3", "G#3"],
  "C#aug": ["C#3", "F3", "A3"],
  Daug: ["D3", "F#3", "A#3"],
  "D#aug": ["D#3", "G3", "B3"],
  Eaug: ["E3", "G#3", "C3"],
  Faug: ["F3", "A3", "C#3"],
  "F#aug": ["F#3", "A#3", "D3"],
  Gaug: ["G3", "B3", "D#3"],
  "G#aug": ["G#3", "C3", "E3"],
  Aaug: ["A3", "C#3", "F3"],
  "A#aug": ["A#3", "D3", "F#3"],
  Baug: ["B3", "D#3", "G3"],
  C7b5: ["C3", "E3", "F#3", "A#3"],
  "C#7b5": ["C#3", "F3", "G3", "B3"],
  D7b5: ["D3", "F#3", "G#3", "C3"],
  "D#7b5": ["D#3", "G3", "A#3", "C#3"],
  E7b5: ["E3", "G#3", "A#3", "D3"],
  F7b5: ["F3", "A3", "B3", "D#3"],
  "F#7b5": ["F#3", "A#3", "C3", "E3"],
  G7b5: ["G3", "B3", "C#3", "F3"],
  "G#7b5": ["G#3", "C3", "D3", "F#3"],
  A7b5: ["A3", "C#3", "D#3", "G3"],
  "A#7b5": ["A#3", "D3", "E3", "G#3"],
  B7b5: ["B3", "D#3", "F3", "A3"],
  "C7#5": ["C3", "E3", "G#3", "A#3"],
  "C#7#5": ["C#3", "F3", "A3", "B3"],
  "D7#5": ["D3", "F#3", "A#3", "C3"],
  "D#7#5": ["D#3", "G3", "B3", "C#3"],
  "E7#5": ["E3", "G#3", "C3", "D3"],
  "F7#5": ["F3", "A3", "C#3", "D#3"],
  "F#7#5": ["F#3", "A#3", "D3", "E3"],
  "G7#5": ["G3", "B3", "D#3", "F3"],
  "G#7#5": ["G#3", "C3", "E3", "F#3"],
  "A7#5": ["A3", "C#3", "F3", "G3"],
  "A#7#5": ["A#3", "D3", "F#3", "G#3"],
  "B7#5": ["B3", "D#3", "G3", "A3"],
  Cm7b5: ["C3", "D#3", "F#3", "A#3"],
  "C#m7b5": ["C#3", "E3", "G3", "B3"],
  Dm7b5: ["D3", "F3", "G#3", "C3"],
  "D#m7b5": ["D#3", "F#3", "A#3", "C#3"],
  Em7b5: ["E3", "G3", "A#3", "D3"],
  Fm7b5: ["F3", "G#3", "B3", "D#3"],
  "F#m7b5": ["F#3", "A3", "C4", "E4"],
  Gm7b5: ["G3", "A#3", "C#3", "F3"],
  "G#m7b5": ["G#3", "B3", "D3", "F#3"],
  Am7b5: ["A3", "C3", "D#3", "G3"],
  "A#m7b5": ["A#3", "C#3", "E3", "G#3"],
  Bm7b5: ["B3", "D3", "F3", "A3"],
  "Cm/maj7": ["C3", "D#3", "G3", "B3"],
  "C#m/maj7": ["C#3", "E3", "G#3", "C3"],
  "Dm/maj7": ["D3", "F3", "A3", "C#3"],
  "D#m/maj7": ["D#3", "F#3", "A#3", "D3"],
  "Em/maj7": ["E3", "G3", "B3", "D#3"],
  "Fm/maj7": ["F3", "G#3", "C3", "E3"],
  "F#m/maj7": ["F#3", "A3", "C#3", "F3"],
  "Gm/maj7": ["G3", "A#3", "D3", "F#3"],
  "G#m/maj7": ["G#3", "B3", "D#3", "G3"],
  "Am/maj7": ["A3", "C#3", "E3", "G#3"],
  "A#m/maj7": ["A#3", "C#3", "F3", "A3"],
  "Bm/maj7": ["B3", "D3", "F#3", "A#3"],
  "Cmaj7#5": ["C3", "E3", "G#3", "B3"],
  "C#maj7#5": ["C#3", "F3", "A3", "C3"],
  "Dmaj7#5": ["D3", "F#3", "A#3", "C#3"],
  "D#maj7#5": ["D#3", "G3", "B3", "D3"],
  "Emaj7#5": ["E3", "G#3", "C3", "D#3"],
  "Fmaj7#5": ["F3", "A3", "C#3", "E3"],
  "F#maj7#5": ["F#3", "A#3", "D3", "F3"],
  "Gmaj7#5": ["G3", "B3", "D#3", "F#3"],
  "G#maj7#5": ["G#3", "C3", "E3", "G3"],
  "Amaj7#5": ["A3", "C#3", "F3", "G#3"],
  "A#maj7#5": ["A#3", "D3", "F#3", "A3"],
  "Bmaj7#5": ["B3", "D#3", "G3", "A#3"],
  Cmaj7b5: ["C3", "E3", "F#3", "B3"],
  "C#maj7b5": ["C#3", "F3", "G3", "C3"],
  Dmaj7b5: ["D3", "F#3", "G#3", "C#3"],
  "D#maj7b5": ["D#3", "G3", "A#3", "D3"],
  Emaj7b5: ["E3", "G#3", "A#3", "D#3"],
  Fmaj7b5: ["F3", "A3", "B3", "E3"],
  "F#maj7b5": ["F#3", "A#3", "C3", "F3"],
  Gmaj7b5: ["G3", "B3", "C#3", "F#3"],
  "G#maj7b5": ["G#3", "C3", "D3", "G3"],
  Amaj7b5: ["A3", "C#3", "D#3", "G#3"],
  "A#maj7b5": ["A#3", "D3", "E3", "A3"],
  Bmaj7b5: ["B3", "D#3", "F3", "A#3"],
  C9: ["C3", "E3", "G3", "A#3", "D3"],
  "C#9": ["C#3", "F3", "G#3", "B3", "D#3"],
  D9: ["D3", "F#3", "A3", "C4", "E4"],
  "D#9": ["D#3", "G3", "A#3", "C#3", "F3"],
  E9: ["E3", "G#3", "B3", "D3", "F#3"],
  F9: ["F3", "A3", "C3", "D#3", "G3"],
  "F#9": ["F#3", "A#3", "C#3", "E3", "G#3"],
  G9: ["G3", "B3", "D3", "F3", "A#3"],
  "G#9": ["G#3", "C3", "D#3", "F#3", "B3"],
  A9: ["A3", "C#3", "E3", "G3", "B3"],
  "A#9": ["A#3", "D3", "F3", "G#3", "C3"],
  B9: ["B3", "D#3", "F#3", "A3", "C#3"],
  Cm9: ["C3", "D#3", "G3", "A#3", "D3"],
  "C#m9": ["C#3", "E3", "G#3", "B3", "D#3"],
  Dm9: ["D3", "F3", "A3", "C3", "E3"],
  "D#m9": ["D#3", "F#3", "A#3", "C#3", "F3"],
  Em9: ["E3", "G3", "B3", "D3", "F#3"],
  Fm9: ["F3", "G#3", "B3", "D#3", "G3"],
  "F#m9": ["F#3", "A3", "C#3", "E3", "G#3"],
  Gm9: ["G3", "A#3", "D3", "F3", "A3"],
  "G#m9": ["G#3", "B3", "D#3", "F#3", "A#3"],
  Am9: ["A3", "C3", "E3", "G3", "B3"],
  "A#m9": ["A#3", "C#3", "F3", "G#3", "C3"],
  Bm9: ["B3", "D3", "F#3", "A3", "C#3"],
  Cmaj9: ["C3", "E3", "G3", "B3", "D3"],
  "C#maj9": ["C#3", "F3", "G#3", "C3", "D#3"],
  Dmaj9: ["D3", "F#3", "A3", "C#3", "E3"],
  "D#maj9": ["D#3", "G3", "A#3", "D3", "F3"],
  Emaj9: ["E3", "G#3", "B3", "D#3", "F#3"],
  Fmaj9: ["F3", "A3", "C3", "E3", "G3"],
  "F#maj9": ["F#3", "A#3", "C#3", "F3", "A3"],
  Gmaj9: ["G3", "B3", "D3", "F#3", "A#3"],
  "G#maj9": ["G#3", "C3", "D#3", "G3", "B3"],
  Amaj9: ["A3", "C#3", "E3", "G#3", "C3"],
  "A#maj9": ["A#3", "D3", "F3", "A4", "C#4"],
  Bmaj9: ["B3", "D#3", "F#3", "A#3", "C#3"],
  "C7#9": ["C3", "E4", "G4", "A#4", "D#4"],
  "C#7#9": ["C#4", "F4", "G#4", "B4", "E4"],
  "D7#9": ["D3", "F#4", "A4", "C4", "F4"],
  "D#7#9": ["D#3", "G3", "A#3", "C#3", "F#3"],
  "E7#9": ["E3", "G#3", "B3", "D3", "G3"],
  "F7#9": ["F3", "A3", "C3", "D#3", "G#3"],
  "F#7#9": ["F#3", "A#3", "C#3", "E3", "A3"],
  "G7#9": ["G3", "B3", "D3", "F3", "A#3"],
  "G#7#9": ["G#3", "C3", "D#3", "F#3", "B3"],
  "A7#9": ["A3", "C#3", "E3", "G3", "C3"],
  "A#7#9": ["A#3", "D3", "F3", "G#3", "C#3"],
  "B7#9": ["B3", "D#3", "F#3", "A3", "D3"],
  C7b9: ["C3", "E3", "G3", "A#3", "C#3"],
  "C#7b9": ["C#3", "F3", "G#3", "B3", "D3"],
  D7b9: ["D3", "F#3", "A3", "C3", "D#3"],
  "D#7b9": ["D#3", "G3", "A#3", "C#3", "E3"],
  E7b9: ["E3", "G#3", "B3", "D3", "F3"],
  F7b9: ["F3", "A3", "C3", "D#3", "F#3"],
  "F#7b9": ["F#3", "A#3", "C#3", "E3", "G3"],
  G7b9: ["G3", "B3", "D3", "F3", "G#3"],
  "G#7b9": ["G#3", "C3", "D#3", "F#3", "A3"],
  A7b9: ["A3", "C#3", "E3", "G3", "A#3"],
  "A#7b9": ["A#3", "D3", "F3", "G#3", "B3"],
  B7b9: ["B3", "D#3", "F#3", "A3", "C3"],
  "C7#9b5": ["C3", "E3", "F#3", "A#3", "D#3"],
  "C#7#9b5": ["C#3", "F3", "G3", "B3", "E3"],
  "D7#9b5": ["D3", "F#3", "G#3", "C3", "F3"],
  "D#7#9b5": ["D#3", "G3", "A3", "C#3", "F#3"],
  "E7#9b5": ["E3", "G#3", "A#3", "D3", "G3"],
  "F7#9b5": ["F3", "A3", "B3", "D#3", "G#3"],
  "F#7#9b5": ["F#3", "A#3", "C3", "E3", "A3"],
  "G7#9b5": ["G3", "B3", "C#3", "F3", "A#3"],
  "G#7#9b5": ["G#3", "C3", "D3", "F#3", "B3"],
  "A7#9b5": ["A3", "C#3", "D#3", "G3", "C3"],
  "A#7#9b5": ["A#3", "D3", "E3", "G#3", "C#3"],
  "B7#9b5": ["B3", "D#3", "F3", "A3", "D3"],
  "C6/9": ["C3", "E3", "G3", "A3", "D3"],
  "C#6/9": ["C#3", "F3", "G#3", "A#3", "D#3"],
  "D6/9": ["D3", "F#3", "A3", "B3", "E3"],
  "D#6/9": ["D#3", "G3", "A#3", "C3", "F3"],
  "E6/9": ["E3", "G#3", "B3", "C#3", "F#3"],
  "F6/9": ["F3", "A3", "C3", "D3", "G3"],
  "F#6/9": ["F#3", "A#3", "C#3", "D#3", "G#3"],
  "G6/9": ["G3", "B3", "D3", "E3", "A3"],
  "G#6/9": ["G#3", "C3", "D#3", "F3", "A#3"],
  "A6/9": ["A3", "C#3", "E3", "F#3", "B3"],
  "A#6/9": ["A#3", "D3", "F3", "G3", "C3"],
  "B6/9": ["B3", "D#3", "F#3", "G#3", "C#3"],
  "C9#5": ["C3", "E3", "G#3", "A#3", "D3"],
  "C#9#5": ["C#3", "F3", "A3", "B3", "D#3"],
  "D9#5": ["D3", "F#3", "A#3", "C3", "E3"],
  "D#9#5": ["D#3", "G3", "B3", "C#3", "F3"],
  "E9#5": ["E3", "G#3", "C3", "D3", "F#3"],
  "F9#5": ["F3", "A3", "C#3", "D#3", "G3"],
  "F#9#5": ["F#3", "A#3", "D3", "E3", "G#3"],
  "G9#5": ["G3", "B3", "D#3", "F3", "A3"],
  "G#9#5": ["G#3", "C3", "E3", "F#3", "A#3"],
  "A9#5": ["A3", "C#3", "F3", "G3", "B3"],
  "A#9#5": ["A#3", "D3", "F#3", "G#3", "C3"],
  "B9#5": ["B3", "D#3", "G3", "A3", "C#3"],
  C9b5: ["C3", "E3", "F#3", "A#3", "D3"],
  "C#9b5": ["C#3", "F3", "G3", "B3", "D#3"],
  D9b5: ["D3", "F#3", "G#3", "C3", "E3"],
  "D#9b5": ["D#3", "G3", "A3", "C#3", "F3"],
  E9b5: ["E3", "G#3", "A#3", "D3", "F#3"],
  F9b5: ["F3", "A3", "B3", "D#3", "G3"],
  "F#9b5": ["F#3", "A#3", "C3", "E3", "G#3"],
  G9b5: ["G3", "B3", "C#3", "F3", "A3"],
  "G#9b5": ["G#3", "C3", "D3", "F#3", "A#3"],
  A9b5: ["A3", "C#3", "D#3", "G3", "B3"],
  "A#9b5": ["A#3", "D3", "E3", "G#3", "C3"],
  B9b5: ["B3", "D#3", "F3", "A3", "C#3"],
  Cm9b5: ["C3", "D#3", "F#3", "A#3", "D3"],
  "C#m9b5": ["C#3", "E3", "G3", "B3", "D#3"],
  Dm9b5: ["D3", "F3", "G#3", "C3", "E3"],
  "D#m9b5": ["D#3", "F#3", "A3", "C#3", "F3"],
  Em9b5: ["E3", "G3", "A#3", "D3", "F#3"],
  Fm9b5: ["F3", "G#3", "B3", "D#3", "G3"],
  "F#m9b5": ["F#3", "A3", "C3", "E3", "G#3"],
  Gm9b5: ["G3", "A#3", "C#3", "F3", "A3"],
  "G#m9b5": ["G#3", "B3", "D3", "F#3", "A#3"],
  Am9b5: ["A3", "C3", "D#3", "G3", "B3"],
  "A#m9b5": ["A#3", "C#3", "E3", "G#3", "C3"],
  Bm9b5: ["B3", "D3", "F3", "A3", "C#3"],
  C11: ["C3", "E3", "G3", "A#3", "D3", "F3"],
  "C#11": ["C#3", "F3", "G#3", "B3", "D#3", "F#3"],
  D11: ["D3", "F#3", "A3", "C3", "E3", "G3"],
  "D#11": ["D#3", "G3", "A#3", "C#3", "F3", "G#3"],
  E11: ["E3", "G#3", "B3", "D3", "F#3", "A3"],
  F11: ["F3", "A3", "C3", "D#3", "G3", "A#3"],
  "F#11": ["F#3", "A#3", "C#3", "E3", "G#3", "B3"],
  G11: ["G3", "B3", "D3", "F3", "A3", "C3"],
  "G#11": ["G#3", "C3", "D#3", "F#3", "A#3", "C#3"],
  A11: ["A3", "C#3", "E3", "G3", "B3", "D3"],
  "A#11": ["A#3", "D3", "F3", "G#3", "C3", "D#3"],
  B11: ["B3", "D#3", "F#3", "A3", "C#3", "E3"],
  Cm11: ["C3", "D#3", "G3", "A#3", "D3", "F3"],
  "C#m11": ["C#3", "E3", "G#3", "B3", "D#3", "F#3"],
  Dm11: ["D3", "F3", "A3", "C3", "E3", "G3"],
  "D#m11": ["D#3", "F#3", "A#3", "C#3", "F3", "G#3"],
  Em11: ["E3", "G3", "B3", "D3", "F#3", "A3"],
  Fm11: ["F3", "G#3", "C3", "D#3", "G3", "A#3"],
  "F#m11": ["F#3", "A3", "C#3", "E3", "G#3", "B3"],
  Gm11: ["G3", "A#3", "D3", "F3", "A3", "C3"],
  "G#m11": ["G#3", "B3", "D#3", "F#3", "A#3", "C#3"],
  Am11: ["A3", "C3", "E3", "G3", "B3", "D3"],
  "A#m11": ["A#3", "C#3", "F3", "G#3", "C3", "D#3"],
  Bm11: ["B3", "D3", "F#3", "A3", "C#3", "E3"],
  C11b9: ["C3", "E3", "G3", "A#3", "C#3", "F3"],
  "C#11b9": ["C#3", "F3", "G#3", "B3", "D3", "F#3"],
  D11b9: ["D3", "F#3", "A3", "C3", "D#3", "G3"],
  "D#11b9": ["D#3", "G3", "A#3", "C#3", "E3", "G#3"],
  E11b9: ["E3", "G#3", "B3", "D3", "F3", "A3"],
  F11b9: ["F3", "A3", "C3", "D#3", "F#3", "A#3"],
  "F#11b9": ["F#3", "A#3", "C#3", "E3", "G3", "B3"],
  G11b9: ["G3", "B3", "D3", "F3", "G#3", "C3"],
  "G#11b9": ["G#3", "C3", "D#3", "F#3", "A3", "C#3"],
  A11b9: ["A3", "C#3", "E3", "G3", "A#3", "D3"],
  "A#11b9": ["A#3", "D3", "F3", "G#3", "B3", "D#3"],
  B11b9: ["B3", "D#3", "F#3", "A3", "C3", "E3"],
  C13: ["C3", "E3", "G3", "A#3", "D3", "F3", "A3"],
  "C#13": ["C#3", "F3", "G#3", "B3", "D#3", "F#3", "A#3"],
  D13: ["D3", "F#3", "A3", "C3", "E3", "G3", "B3"],
  "D#13": ["D#3", "G3", "A#3", "C#3", "F3", "G#3", "C3"],
  E13: ["E3", "G#3", "B3", "D3", "F#3", "A3", "C#3"],
  F13: ["F3", "A3", "C3", "D#3", "G3", "A#3", "D3"],
  "F#13": ["F#3", "A#3", "C#3", "E3", "G#3", "B3", "D#3"],
  G13: ["G3", "B3", "D3", "F3", "A3", "C3", "E3"],
  "G#13": ["G#3", "C3", "D#3", "F#3", "A#3", "C#3", "F3"],
  A13: ["A3", "C#3", "E3", "G3", "B3", "D3", "F#3"],
  "A#13": ["A#3", "D3", "F3", "G#3", "C3", "D#3", "G3"],
  B13: ["B3", "D#3", "F#3", "A3", "C#3", "E3", "G#3"],
  Cm13: ["C3", "D#3", "G3", "A#3", "D3", "F3", "A3"],
  "C#m13": ["C#3", "E3", "G#3", "B3", "D#3", "F#3", "A#3"],
  Dm13: ["D3", "F3", "A3", "C3", "E3", "G3", "B3"],
  "D#m13": ["D#3", "F#3", "A#3", "C#3", "F3", "G#3", "C3"],
  Em13: ["E3", "G3", "B3", "D3", "F#3", "A3", "C#3"],
  Fm13: ["F3", "G#3", "C3", "D#3", "G3", "A#3", "D3"],
  "F#m13": ["F#3", "A3", "C#3", "E3", "G#3", "B3", "D#3"],
  Gm13: ["G3", "A#3", "D3", "F3", "A3", "C3", "E3"],
  "G#m13": ["G#3", "B3", "D#3", "F#3", "A#3", "C#3", "F3"],
  Am13: ["A3", "C3", "E3", "G3", "B3", "D3", "F#3"],
  "A#m13": ["A#3", "C#3", "F3", "G#3", "C3", "D#3", "G3"],
  Bm13: ["B3", "D3", "F#3", "A3", "C#3", "E3", "G#3"],
  Cmaj13: ["C3", "E3", "G3", "B3", "D3", "F3", "A3"],
  "C#maj13": ["C#3", "F3", "G#3", "C3", "D#3", "F#3", "A#3"],
  Dmaj13: ["D3", "F#3", "A3", "C#3", "E3", "G3", "B3"],
  "D#maj13": ["D#3", "G3", "A#3", "D3", "F3", "G#3", "C3"],
  Emaj13: ["E3", "G#3", "B3", "D#3", "F#3", "A3", "C#3"],
  Fmaj13: ["F3", "A3", "C3", "E3", "G3", "A#3", "D3"],
  "F#maj13": ["F#3", "A#3", "C#3", "F3", "G#3", "B3", "D#3"],
  Gmaj13: ["G3", "B3", "D3", "F#3", "A3", "C3", "E3"],
  "G#maj13": ["G#3", "C3", "D#3", "G3", "A#3", "C#3", "F3"],
  Amaj13: ["A3", "C#3", "E3", "G#3", "B3", "D3", "F#3"],
  "A#maj13": ["A#3", "D3", "F3", "A3", "C3", "D#3", "G3"],
  Bmaj13: ["B3", "D#3", "F#3", "A#3", "C#3", "E3", "G#3"],
  "Cmaj13#11": ["C3", "E3", "G3", "B3", "D3", "F#3", "A3"],
  "C#maj13#11": ["C#3", "F3", "G#3", "C3", "D#3", "G3", "A#3"],
  "Dmaj13#11": ["D3", "F#3", "A3", "C#3", "E3", "G#3", "B3"],
  "D#maj13#11": ["D#3", "G3", "A#3", "D3", "F3", "A3", "C3"],
  "Emaj13#11": ["E3", "G#3", "B3", "D#3", "F#3", "A#3", "C#3"],
  "Fmaj13#11": ["F3", "A3", "C3", "E3", "G3", "B3", "D3"],
  "F#maj13#11": ["F#3", "A#3", "C#3", "F3", "G#3", "C3", "D#3"],
  "Gmaj13#11": ["G3", "B3", "D3", "F#3", "A3", "C#3", "E3"],
  "G#maj13#11": ["G#3", "C3", "D#3", "G3", "A#3", "D3", "F3"],
  "Amaj13#11": ["A3", "C#3", "E3", "G#3", "B3", "D#3", "F#3"],
  "A#maj13#11": ["A#3", "D3", "F3", "A3", "C3", "E3", "G3"],
  "Bmaj13#11": ["B3", "D#3", "F#3", "A#3", "C#3", "F3", "G#3"],
  Cadd9: ["C3", "E3", "G3", "D4"],
  "C#add9": ["C#3", "F3", "G#3", "D#4"],
  Dadd9: ["D", "F#", "A", "E"],
  "D#add9": ["D#", "G", "A#", "F"],
  Eadd9: ["E", "G#", "B", "F#"],
  Fadd9: ["F", "A", "C", "G"],
  "F#add9": ["F#", "A#", "C#", "G#"],
  Gadd9: ["G", "B", "D", "A"],
  "G#add9": ["G#", "C", "D#", "A#"],
  Aadd9: ["A", "C#", "E", "B"],
  "A#add9": ["A#", "D", "F", "C"],
  Badd9: ["B", "D#", "F#", "C#"],
  Cmadd9: ["C", "D#", "G", "D"],
  "C#madd9": ["C#", "E", "G#", "D#"],
  Dmadd9: ["D", "F", "A", "E"],
  "D#madd9": ["D#", "F#", "A#", "F"],
  Emadd9: ["E", "G", "B", "F#"],
  Fmadd9: ["F", "G#", "C", "G"],
  "F#madd9": ["F#", "A", "C#", "G#"],
  Gmadd9: ["G", "A#", "D", "A"],
  "G#madd9": ["G#", "B", "D#", "A#"],
  Amadd9: ["A", "C", "E", "B"],
  "A#madd9": ["A#", "C#", "F", "C"],
  Bmadd9: ["B", "D", "F#", "C#"],
  Csus2: ["C", "D", "G"],
  "C#sus2": ["C#", "D#", "G#"],
  Dsus2: ["D", "E", "A"],
  "D#sus2": ["D#", "F", "A#"],
  Esus2: ["E", "F#", "B"],
  Fsus2: ["F", "G", "C"],
  "F#sus2": ["F#", "G#", "C#"],
  Gsus2: ["G", "A", "D"],
  "G#sus2": ["G#", "A#", "D#"],
  Asus2: ["A", "B", "E"],
  "A#sus2": ["A#", "C", "F"],
  Bsus2: ["B", "C#", "F#"],
  C5: ["C", "G"],
  "C#5": ["C#", "G#"],
  D5: ["D", "A"],
  "D#5": ["D#", "A#"],
  E5: ["E", "B"],
  F5: ["F", "C"],
  "F#5": ["F#", "C#"],
  G5: ["G", "D"],
  "G#5": ["G#", "D#"],
  A5: ["A", "E"],
  "A#5": ["A#", "F"],
  B5: ["B", "F#"],
  "C(b5)": ["C", "E", "F#"],
  "C#(b5)": ["C#", "F", "G"],
  "D(b5)": ["D", "F#", "G#"],
  "D#(b5)": ["D#", "G", "A"],
  "E(b5)": ["E", "G#", "A#"],
  "F(b5)": ["F", "A", "B"],
  "F#(b5)": ["F#", "A#", "C"],
  "G(b5)": ["G", "B", "C#"],
  "G#(b5)": ["G#", "C", "D"],
  "A(b5)": ["A", "C#", "D#"],
  "A#(b5)": ["A#", "D", "E"],
  "B(b5)": ["B", "D#", "F"],
  "C(#5)": ["C", "E", "G#"],
  "C#(#5)": ["C#", "F", "A"],
  "D(#5)": ["D", "F#", "A#"],
  "D#(#5)": ["D#", "G", "B"],
  "E(#5)": ["E", "G#", "C"],
  "F(#5)": ["F", "A", "C#"],
  "F#(#5)": ["F#", "A#", "D"],
  "G(#5)": ["G", "B", "D#"],
  "G#(#5)": ["G#", "C", "E"],
  "A(#5)": ["A", "C#", "F"],
  "A#(#5)": ["A#", "D", "F#"],
  "B(#5)": ["B", "D#", "G"],

  Cmaj11: ["C3", "E3", "G3", "B3", "D4", "F4"],
  "C#maj11": ["C#3", "F3", "G#3", "C4", "D#4", "F#4"],
  Dmaj11: ["D3", "F#3", "A3", "C#3", "E3", "G3"],
  "D#maj11": ["D#3", "G3", "A#3", "D3", "F3", "G#3"],
  Emaj11: ["E3", "G#3", "B3", "D#3", "F#3", "A3"],

  "Cm6/9": ["C3", "D#3", "G3", "A3", "D3"],
  "C#m6/9": ["C#3", "E3", "G#3", "A#3", "D#3"],
  "Dm6/9": ["D3", "F3", "A3", "B3", "E3"],
  "D#m6/9": ["D#3", "F#3", "A#3", "C3", "F3"],
  "Em6/9": ["E3", "G3", "B3", "C#3", "F#3"],

  "Cm/maj9": ["C3", "D#3", "G3", "B3", "D3"],
  "C#m/maj9": ["C#3", "E3", "G#3", "C3", "D#3"],
  "Dm/maj9": ["D3", "F3", "A3", "C#3", "E3"],
  "D#m/maj9": ["D#3", "F#3", "A#3", "D3", "F3"],
  "Em/maj9": ["E3", "G3", "B3", "D#3", "F#3"],

  "Cm7#5": ["C3", "D#3", "G#3", "A#3"],
  "C#m7#5": ["C#3", "E3", "A3", "B3"],
  "Dm7#5": ["D3", "F3", "A#3", "C3"],
  "D#m7#5": ["D#3", "F#3", "B3", "D3"],
  "Em7#5": ["E3", "G3", "C3", "D#3"],

  "C7/6": ["C3", "E3", "G3", "A3", "A#3"],
  "C#7/6": ["C#3", "F3", "G#3", "A#3", "B3"],
  "D7/6": ["D3", "F#3", "A3", "B3", "C3"],
  "D#7/6": ["D#3", "G3", "A#3", "C3", "D3"],
  "E7/6": ["E3", "G#3", "B3", "C#3", "D#3"],

  C7b5b9: ["C3", "E3", "F#3", "A#3", "C#3"],
  "C#7b5b9": ["C#3", "F3", "G3", "B3", "D3"],
  D7b5b9: ["D3", "F#3", "G3", "C3", "D#3"],
  "D#7b5b9": ["D#3", "G3", "G#3", "D3", "E3"],
  E7b5b9: ["E3", "G#3", "A3", "D#3", "F#3"],
  "F7#5#9": ["F", "A", "C#", "D#", "G#"],
  "F#7#5#9": ["F#", "A#", "D", "E", "A"],
  "G7#5#9": ["G", "B", "D#", "F", "A#"],
  "G#7#5#9": ["G#", "C", "E", "F#", "B"],
  "A7#5#9": ["A", "C#", "F", "G", "C"],
  "A#7#5#9": ["A#", "D", "F#", "G#", "C#"],
  "B7#5#9": ["B", "D#", "G", "A", "D"],
  "C7#11": ["C", "E", "G", "A#", "D", "F#", "A"],
  "C#7#11": ["C#", "F", "G#", "B", "D#", "G", "A#"],
  "D7#11": ["D", "F#", "A", "C", "E", "G#", "B"],
  "D#7#11": ["D#", "G", "A#", "C#", "F", "A", "C"],
  "E7#11": ["E", "G#", "B", "D", "F#", "A#", "C#"],
  "F7#11": ["F", "A", "C", "D#", "G", "B", "D"],
  "F#7#11": ["F#", "A#", "C#", "E", "G#", "C", "D#"],
  "G7#11": ["G", "B", "D", "F", "A", "C#", "E"],
  "G#7#11": ["G#", "C", "D#", "F#", "A#", "D", "F"],
  "A7#11": ["A", "C#", "E", "G", "B", "D#", "F#"],
  "A#7#11": ["A#", "D", "F", "G#", "C", "E", "G"],
  "B7#11": ["B", "D#", "F#", "A", "C#", "F", "G#"],
  C13b9: ["C", "E", "G", "A#", "C#", "F", "A"],
  "C#13b9": ["C#", "F", "G#", "A#", "B", "D#", "F#"],
  D13b9: ["D", "F#", "A", "B", "C", "D#", "G"],
  "D#13b9": ["D#", "G", "A#", "C", "C#", "E", "G#"],
  E13b9: ["E", "G#", "B", "C#", "D", "F", "A"],
  F13b9: ["F", "A", "C", "D", "D#", "G", "A#"],
  "F#13b9": ["F#", "A#", "C#", "D#", "E", "G#", "B"],
  G13b9: ["G", "B", "D", "E", "F", "G#", "C"],
  "G#13b9": ["G#", "C", "D#", "F", "F#", "A", "C#"],
  A13b9: ["A", "C#", "E", "F#", "G", "A#", "D"],
  "A#13b9": ["A#", "D", "F", "G", "G#", "B", "D#"],
  B13b9: ["B", "D#", "F#", "A", "A#", "C#", "E"],
  C13b5b9: ["C", "E", "F#", "A#", "C#", "F", "A"],
  "C#13b5b9": ["C#", "F", "G", "B", "D", "F#", "A#"],
  D13b5b9: ["D", "F#", "G#", "C", "D#", "G", "B"],
  "D#13b5b9": ["D#", "G", "A", "C#", "E", "G#", "C"],
  E13b5b9: ["E", "G#", "A#", "D", "F", "A", "C#"],
  F13b5b9: ["F", "A", "B", "D#", "F#", "A#", "D"],
  "F#13b5b9": ["F#", "A#", "C", "E", "G", "B", "D#"],
  G13b5b9: ["G", "B", "C#", "F", "G#", "C", "E"],
  "G#13b5b9": ["G#", "C", "D", "F#", "A", "C#", "F"],
  A13b5b9: ["A", "C#", "D#", "G", "A#", "D", "F#"],
  "A#13b5b9": ["A#", "D", "E", "G#", "B", "D#", "G"],
  B13b5b9: ["B", "D#", "F", "A", "C", "E", "G#"],
  "C13#11": ["C", "E", "G", "A#", "D", "F#", "A"],
  "C#13#11": ["C#", "F", "G#", "B", "D#", "G", "A#"],
  "D13#11": ["D", "F#", "A", "C", "E", "G#", "B"],
  "D#13#11": ["D#", "G", "A#", "C#", "F", "A", "C"],
  "E13#11": ["E", "G#", "B", "D", "F#", "A#", "C#"],
  "F13#11": ["F", "A", "C", "D#", "G", "B", "D"],
  "F#13#11": ["F#", "A#", "C#", "E", "G#", "C", "D#"],
  "G13#11": ["G", "B", "D", "F", "A", "C#", "E"],
  "G#13#11": ["G#", "C", "D#", "F#", "A#", "D", "F"],
  "A13#11": ["A", "C#", "E", "G", "B", "D#", "F#"],
  "A#13#11": ["A#", "D", "F", "G#", "C", "E", "G"],
  "B13#11": ["B", "D#", "F#", "A", "C#", "F", "G#"],
  "C13b9#11": ["C", "E", "G", "A#", "C#", "F#", "A"],
  "C#13b9#11": ["C#", "F", "G#", "B", "D", "G", "A#"],
  "D13b9#11": ["D", "F#", "A", "C", "D#", "G#", "B"],
  "D#13b9#11": ["D#", "G", "A#", "C#", "E", "A", "C"],
  "E13b9#11": ["E", "G#", "B", "D", "F", "A#", "C#"],
  "F13b9#11": ["F", "A", "C", "D#", "F#", "B", "D"],
  "F#13b9#11": ["F#", "A#", "C#", "D#", "E", "G#", "B"],
  "G13b9#11": ["G", "B", "D", "F", "G#", "C#", "E"],
  "G#13b9#11": ["G#", "C", "D#", "F#", "A", "D", "F"],
  "A13b9#11": ["A", "C#", "E", "G", "A#", "D#", "F#"],
  "A#13b9#11": ["A#", "D", "F", "G#", "B", "E", "G"],
  "B13b9#11": ["B3", "D#4", "F#4", "A4", "C5", "F5", "G#5"],
};
