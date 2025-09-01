// Tipos TypeScript para el sistema de constelaciones

export interface Star {
  name: string;
  x: number;
  y: number;
  brightness: number;
}

export interface Constellation {
  id: string;
  name: string;
  distinctiveName: string;
  planet: string;
  stars: Star[];
  lines?: number[][];
}

export interface SearchItem {
  type: 'constellation' | 'star';
  name: string;
  distinctiveName?: string;
  id?: string;
  planet?: string;
  constellation?: string;
  constellationId?: string;
  brightness?: number;
  category: string;
}

export interface ConstellationProps {
  constellations: Constellation[];
}

export interface StarfieldProps {
  currentPlanet?: string;
}
