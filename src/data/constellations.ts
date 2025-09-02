import type { Constellation } from '../types/constellation';

export const constellations: Constellation[] = [
  {
    id: 'ursa-major',
    name: 'Osa Mayor',
    distinctiveName: 'El Gran Carro',
    planet: 'Jupiter',
    stars: [
      { name: 'Dubhe', x: 8, y: 18, brightness: 0.63 },
      { name: 'Merak', x: 12, y: 22, brightness: 0.56 },
      { name: 'Phecda', x: 18, y: 20, brightness: 0.49 },
      { name: 'Megrez', x: 24, y: 18, brightness: 0.42 },
      { name: 'Alioth', x: 38, y: 12, brightness: 0.56 },
      { name: 'Mizar', x: 44, y: 10, brightness: 0.49 },
      { name: 'Alkaid', x: 50, y: 8, brightness: 0.63 }
    ],
    lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6]]
  },
  {
    id: 'orion',
    name: 'Orión',
    distinctiveName: 'El Cazador Guerrero',
    planet: 'Mars',
    stars: [
      { name: 'Bellatrix', x: 92, y: 18, brightness: 0.56 },
      { name: 'Betelgeuse', x: 96, y: 22, brightness: 0.7 },
      { name: 'Rigel', x: 98, y: 38, brightness: 0.63 },
      { name: 'Alnitak', x: 94, y: 28, brightness: 0.49 },
      { name: 'Alnilam', x: 97, y: 30, brightness: 0.56 },
      { name: 'Mintaka', x: 99, y: 32, brightness: 0.49 },
      { name: 'Saiph', x: 92, y: 36, brightness: 0.42 }
    ],
    lines: [[0,1], [1,3], [3,4], [4,5], [1,6], [2,6], [3,6]]
  },
  {
    id: 'cassiopeia',
    name: 'Casiopea',
    distinctiveName: 'La Reina Celestial',
    planet: 'Saturn',
    stars: [
      { name: 'Schedar', x: 90, y: 80, brightness: 0.56 },
      { name: 'Caph', x: 94, y: 84, brightness: 0.49 },
      { name: 'Gamma Cas', x: 98, y: 82, brightness: 0.63 },
      { name: 'Ruchbah', x: 92, y: 78, brightness: 0.42 },
      { name: 'Segin', x: 88, y: 76, brightness: 0.35 }
    ],
    lines: [[0,1], [1,2], [2,3], [3,4]]
  }
  // Aquí añadirías las otras 27 constelaciones...
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
