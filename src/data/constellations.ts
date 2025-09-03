import type { Constellation } from '../types/constellation';

export const constellations: Constellation[] = [
  {
    id: 'ursa-major',
    name: 'Osa Mayor',
    distinctiveName: 'El Gran Carro',
    planet: 'Jupiter',
    stars: [
      { name: 'Dubhe', x: 20, y: 15, brightness: 0.63 },
      { name: 'Merak', x: 23, y: 17, brightness: 0.56 },
      { name: 'Phecda', x: 27, y: 16, brightness: 0.49 },
      { name: 'Megrez', x: 30, y: 15, brightness: 0.42 },
      { name: 'Alioth', x: 33, y: 14, brightness: 0.56 },
      { name: 'Mizar', x: 36, y: 13, brightness: 0.49 },
      { name: 'Alkaid', x: 38, y: 12, brightness: 0.63 }
    ],
    lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6]]
  },
  {
    id: 'orion',
    name: 'Orión',
    distinctiveName: 'El Cazador Guerrero',
    planet: 'Mars',
    stars: [
      { name: 'Bellatrix', x: 75, y: 30, brightness: 0.56 },
      { name: 'Betelgeuse', x: 73, y: 32, brightness: 0.7 },
      { name: 'Rigel', x: 77, y: 42, brightness: 0.63 },
      { name: 'Alnitak', x: 75, y: 36, brightness: 0.49 },
      { name: 'Alnilam', x: 76, y: 37, brightness: 0.56 },
      { name: 'Mintaka', x: 77, y: 38, brightness: 0.49 },
      { name: 'Saiph', x: 74, y: 41, brightness: 0.42 }
    ],
    lines: [[0,1], [1,3], [3,4], [4,5], [1,6], [2,6], [3,6]]
  },
  {
    id: 'cassiopeia',
    name: 'Casiopea',
    distinctiveName: 'La Reina Celestial',
    planet: 'Saturn',
    stars: [
      { name: 'Schedar', x: 85, y: 75, brightness: 0.56 },
      { name: 'Caph', x: 87, y: 77, brightness: 0.49 },
      { name: 'Gamma Cas', x: 89, y: 76, brightness: 0.63 },
      { name: 'Ruchbah', x: 87, y: 74, brightness: 0.42 },
      { name: 'Segin', x: 85, y: 73, brightness: 0.35 }
    ],
    lines: [[0,1], [1,2], [2,3], [3,4]]
  },
  {
    id: 'lyra',
    name: 'Lira',
    distinctiveName: 'La Lira Celeste',
    planet: 'Venus',
    stars: [
      { name: 'Vega', x: 60, y: 25, brightness: 0.7 },
      { name: 'Sheliak', x: 62, y: 28, brightness: 0.45 },
      { name: 'Sulafat', x: 58, y: 27, brightness: 0.52 },
      { name: 'Delta Lyr', x: 59, y: 30, brightness: 0.38 }
    ],
    lines: [[0,1], [0,2], [1,3], [2,3]]
  },
  {
    id: 'cygnus',
    name: 'Cisne',
    distinctiveName: 'El Cisne Volador',
    planet: 'Neptune',
    stars: [
      { name: 'Deneb', x: 45, y: 35, brightness: 0.65 },
      { name: 'Sadr', x: 48, y: 38, brightness: 0.55 },
      { name: 'Gienah', x: 50, y: 35, brightness: 0.48 },
      { name: 'Delta Cyg', x: 46, y: 41, brightness: 0.42 },
      { name: 'Albireo', x: 49, y: 44, brightness: 0.51 }
    ],
    lines: [[0,1], [1,2], [1,3], [1,4]]
  },
  {
    id: 'draco',
    name: 'Dragón',
    distinctiveName: 'El Dragón Guardián',
    planet: 'Pluto',
    stars: [
      { name: 'Thuban', x: 50, y: 60, brightness: 0.48 },
      { name: 'Rastaban', x: 52, y: 65, brightness: 0.52 },
      { name: 'Eltanin', x: 48, y: 68, brightness: 0.58 },
      { name: 'Altais', x: 46, y: 63, brightness: 0.45 }
    ],
    lines: [[0,1], [1,2], [2,3], [3,0]]
  },
  {
    id: 'corona-borealis',
    name: 'Corona Boreal',
    distinctiveName: 'La Corona del Norte',
    planet: 'Jupiter',
    stars: [
      { name: 'Alphecca', x: 35, y: 55, brightness: 0.6 },
      { name: 'Nusakan', x: 37, y: 57, brightness: 0.45 },
      { name: 'Gamma CrB', x: 33, y: 58, brightness: 0.42 },
      { name: 'Delta CrB', x: 31, y: 56, brightness: 0.38 }
    ],
    lines: [[0,1], [1,2], [2,3], [3,0]]
  },
  {
    id: 'hercules',
    name: 'Hércules',
    distinctiveName: 'El Héroe Inmortal',
    planet: 'Mars',
    stars: [
      { name: 'Kornephoros', x: 65, y: 50, brightness: 0.55 },
      { name: 'Zeta Her', x: 68, y: 52, brightness: 0.48 },
      { name: 'Pi Her', x: 63, y: 54, brightness: 0.42 },
      { name: 'Eta Her', x: 66, y: 48, brightness: 0.45 }
    ],
    lines: [[0,1], [1,2], [2,3], [3,0]]
  }
  // Aquí añadirías las otras constelaciones...
];

export const constellationCategories = {
  zodiac: {
    title: 'Zodíaco',
    description: 'Las 12 constelaciones del zodíaco tradicional',
    icon: '♈',
    color: '#FFD700',
    constellations: ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpius', 'sagittarius', 'capricornus', 'aquarius', 'pisces']
  },
  mythological: {
    title: 'Mitológicas',
    description: 'Constelaciones basadas en mitología griega y romana',
    icon: '🏛️',
    color: '#87CEEB',
    constellations: ['orion', 'cassiopeia', 'andromeda', 'perseus', 'hercules', 'pegasus', 'cygnus', 'lyra']
  },
  navigation: {
    title: 'Navegación',
    description: 'Constelaciones históricamente usadas para navegación',
    icon: '🧭',
    color: '#98FB98',
    constellations: ['ursa-major', 'ursa-minor', 'crux', 'carina', 'vela', 'puppis']
  },
  seasonal: {
    title: 'Estacionales',
    description: 'Visibles en diferentes épocas del año',
    icon: '🌟',
    color: '#DDA0DD',
    constellations: ['bootes', 'corona-borealis', 'draco', 'auriga', 'canis-major', 'canis-minor']
  }
};
