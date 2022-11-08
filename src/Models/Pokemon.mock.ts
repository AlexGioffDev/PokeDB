export interface IPokemon {
  id: number;
  name: string;
  sprites: Sprites;
}

interface Sprites {
  other: Other;
}

interface Other {
  official_artwork: Officialartwork;
}

interface Officialartwork {
  front_default: string;
}
