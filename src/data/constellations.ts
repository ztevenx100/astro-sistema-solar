import type { Constellation } from '../types/constellation';

export const constellations: Constellation[] = [
  // REGIÓN NORTE (parte superior del cielo)
  {
    id: 'ursa-major',
    name: 'Osa Mayor',
    distinctiveName: 'El Gran Carro',
    planet: 'Jupiter',
    stars: [
      { name: 'Dubhe', x: 15, y: 20, brightness: 0.63 },
      { name: 'Merak', x: 18, y: 22, brightness: 0.56 },
      { name: 'Phecda', x: 22, y: 21, brightness: 0.49 },
      { name: 'Megrez', x: 25, y: 20, brightness: 0.42 },
      { name: 'Alioth', x: 28, y: 19, brightness: 0.56 },
      { name: 'Mizar', x: 31, y: 18, brightness: 0.49 },
      { name: 'Alkaid', x: 34, y: 17, brightness: 0.63 }
    ],
    lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6]]
  },
  {
    id: 'ursa-minor',
    name: 'Osa Menor',
    distinctiveName: 'La Estrella Polar',
    planet: 'Earth',
    stars: [
      { name: 'Polaris', x: 50, y: 18, brightness: 0.7 },
      { name: 'Yildun', x: 48, y: 20, brightness: 0.4 },
      { name: 'Epsilon UMi', x: 46, y: 22, brightness: 0.45 },
      { name: 'Zeta UMi', x: 52, y: 20, brightness: 0.42 },
      { name: 'Eta UMi', x: 54, y: 22, brightness: 0.38 },
      { name: 'Gamma UMi', x: 52, y: 24, brightness: 0.48 },
      { name: 'Beta UMi', x: 50, y: 26, brightness: 0.5 }
    ],
    lines: [[0,1], [1,2], [2,6], [6,5], [5,4], [4,3], [0,6]]
  },
  {
    id: 'draco',
    name: 'Dragón',
    distinctiveName: 'El Dragón Guardián',
    planet: 'Neptune',
    stars: [
      { name: 'Thuban', x: 65, y: 28, brightness: 0.48 },
      { name: 'Rastaban', x: 68, y: 31, brightness: 0.52 },
      { name: 'Eltanin', x: 70, y: 34, brightness: 0.58 },
      { name: 'Altais', x: 72, y: 37, brightness: 0.45 },
      { name: 'Aldibain', x: 69, y: 40, brightness: 0.42 }
    ],
    lines: [[0,1], [1,2], [2,3], [3,4], [4,0]]
  },
  {
    id: 'cassiopeia',
    name: 'Casiopea',
    distinctiveName: 'La Reina Celestial',
    planet: 'Saturn',
    stars: [
      { name: 'Schedar', x: 85, y: 25, brightness: 0.56 },
      { name: 'Caph', x: 88, y: 27, brightness: 0.49 },
      { name: 'Gamma Cas', x: 91, y: 25, brightness: 0.63 },
      { name: 'Ruchbah', x: 94, y: 23, brightness: 0.42 },
      { name: 'Segin', x: 97, y: 21, brightness: 0.35 }
    ],
    lines: [[0,1], [1,2], [2,3], [3,4]]
  },

  // REGIÓN ESTE - Reorganizada con mejor espaciado
  {
    id: 'cygnus',
    name: 'Cisne',
    distinctiveName: 'El Cisne Volador',
    planet: 'Venus',
    stars: [
      { name: 'Deneb', x: 90, y: 35, brightness: 0.65 },
      { name: 'Sadr', x: 87, y: 39, brightness: 0.55 },
      { name: 'Gienah', x: 84, y: 42, brightness: 0.48 },
      { name: 'Delta Cyg', x: 92, y: 42, brightness: 0.42 },
      { name: 'Albireo', x: 89, y: 46, brightness: 0.51 }
    ],
    lines: [[0,1], [1,2], [1,3], [1,4]]
  },
  {
    id: 'lyra',
    name: 'Lira',
    distinctiveName: 'La Lira Celeste',
    planet: 'Mercury',
    stars: [
      { name: 'Vega', x: 75, y: 42, brightness: 0.7 },
      { name: 'Sheliak', x: 77, y: 45, brightness: 0.45 },
      { name: 'Sulafat', x: 73, y: 44, brightness: 0.52 },
      { name: 'Delta Lyr', x: 75, y: 47, brightness: 0.38 }
    ],
    lines: [[0,1], [0,2], [1,3], [2,3]]
  },
  {
    id: 'hercules',
    name: 'Hércules',
    distinctiveName: 'El Héroe Inmortal',
    planet: 'Jupiter',
    stars: [
      { name: 'Kornephoros', x: 85, y: 55, brightness: 0.55 },
      { name: 'Zeta Her', x: 88, y: 57, brightness: 0.48 },
      { name: 'Pi Her', x: 83, y: 59, brightness: 0.42 },
      { name: 'Eta Her', x: 86, y: 53, brightness: 0.45 }
    ],
    lines: [[0,1], [1,2], [2,3], [3,0]]
  },
  {
    id: 'corona-borealis',
    name: 'Corona Boreal',
    distinctiveName: 'La Corona del Norte',
    planet: 'Mars',
    stars: [
      { name: 'Alphecca', x: 60, y: 45, brightness: 0.6 },
      { name: 'Nusakan', x: 62, y: 47, brightness: 0.45 },
      { name: 'Gamma CrB', x: 58, y: 48, brightness: 0.42 },
      { name: 'Delta CrB', x: 56, y: 46, brightness: 0.38 }
    ],
    lines: [[0,1], [1,2], [2,3], [3,0]]
  },

  // REGIÓN SUR
  {
    id: 'orion',
    name: 'Orión',
    distinctiveName: 'El Cazador Guerrero',
    planet: 'Mars',
    stars: [
      { name: 'Bellatrix', x: 45, y: 75, brightness: 0.56 },
      { name: 'Betelgeuse', x: 42, y: 77, brightness: 0.7 },
      { name: 'Rigel', x: 48, y: 87, brightness: 0.63 },
      { name: 'Alnitak', x: 45, y: 81, brightness: 0.49 },
      { name: 'Alnilam', x: 46, y: 82, brightness: 0.56 },
      { name: 'Mintaka', x: 47, y: 83, brightness: 0.49 },
      { name: 'Saiph', x: 44, y: 86, brightness: 0.42 }
    ],
    lines: [[0,1], [1,3], [3,4], [4,5], [1,6], [2,6], [3,6]]
  },
  {
    id: 'canis-major',
    name: 'Can Mayor',
    distinctiveName: 'El Perro Gigante',
    planet: 'Sirius',
    stars: [
      { name: 'Sirius', x: 25, y: 85, brightness: 0.8 },
      { name: 'Mirzam', x: 23, y: 82, brightness: 0.5 },
      { name: 'Wezen', x: 28, y: 88, brightness: 0.48 },
      { name: 'Adhara', x: 26, y: 90, brightness: 0.52 }
    ],
    lines: [[0,1], [0,2], [0,3], [2,3]]
  },
  {
    id: 'canis-minor',
    name: 'Can Menor',
    distinctiveName: 'El Perro Pequeño',
    planet: 'Procyon',
    stars: [
      { name: 'Procyon', x: 35, y: 75, brightness: 0.65 },
      { name: 'Gomeisa', x: 37, y: 73, brightness: 0.4 }
    ],
    lines: [[0,1]]
  },
  {
    id: 'gemini',
    name: 'Géminis',
    distinctiveName: 'Los Hermanos Estelares',
    planet: 'Pollux',
    stars: [
      { name: 'Castor', x: 65, y: 75, brightness: 0.6 },
      { name: 'Pollux', x: 68, y: 77, brightness: 0.65 },
      { name: 'Alhena', x: 70, y: 82, brightness: 0.5 },
      { name: 'Wasat', x: 66, y: 80, brightness: 0.45 }
    ],
    lines: [[0,1], [1,3], [3,2], [0,3]]
  },

  // REGIÓN OESTE
  {
    id: 'leo',
    name: 'Leo',
    distinctiveName: 'El León Dorado',
    planet: 'Regulus',
    stars: [
      { name: 'Regulus', x: 15, y: 65, brightness: 0.7 },
      { name: 'Denebola', x: 25, y: 62, brightness: 0.6 },
      { name: 'Algieba', x: 18, y: 67, brightness: 0.5 },
      { name: 'Zosma', x: 22, y: 65, brightness: 0.48 }
    ],
    lines: [[0,2], [2,3], [3,1], [0,3]]
  },
  {
    id: 'virgo',
    name: 'Virgo',
    distinctiveName: 'La Doncella Cósmica',
    planet: 'Spica',
    stars: [
      { name: 'Spica', x: 8, y: 50, brightness: 0.7 },
      { name: 'Zavijava', x: 12, y: 48, brightness: 0.48 },
      { name: 'Porrima', x: 10, y: 52, brightness: 0.5 },
      { name: 'Vindemiatrix', x: 15, y: 45, brightness: 0.45 }
    ],
    lines: [[0,1], [1,3], [0,2], [2,1]]
  },
  {
    id: 'bootes',
    name: 'Boyero',
    distinctiveName: 'El Pastor Celestial',
    planet: 'Arcturus',
    stars: [
      { name: 'Arcturus', x: 5, y: 35, brightness: 0.75 },
      { name: 'Nekkar', x: 8, y: 32, brightness: 0.48 },
      { name: 'Seginus', x: 10, y: 38, brightness: 0.5 },
      { name: 'Izar', x: 7, y: 40, brightness: 0.52 }
    ],
    lines: [[0,1], [0,2], [0,3], [2,3]]
  },

  // REGIÓN CENTRAL
  {
    id: 'aquila',
    name: 'Águila',
    distinctiveName: 'El Ave Celestial',
    planet: 'Altair',
    stars: [
      { name: 'Altair', x: 45, y: 55, brightness: 0.7 },
      { name: 'Tarazed', x: 43, y: 52, brightness: 0.5 },
      { name: 'Alshain', x: 47, y: 52, brightness: 0.48 },
      { name: 'Bezek', x: 46, y: 58, brightness: 0.45 }
    ],
    lines: [[1,0], [0,2], [0,3]]
  }
];

export const constellationCategories = {
  zodiac: {
    title: 'Zodíaco',
    description: 'Constelaciones del zodíaco tradicional',
    icon: '♈',
    color: '#FFD700',
    constellations: ['leo', 'virgo', 'gemini']
  },
  mythological: {
    title: 'Mitológicas',
    description: 'Constelaciones basadas en mitología griega y romana',
    icon: '🏛️',
    color: '#87CEEB',
    constellations: ['orion', 'cassiopeia', 'hercules', 'cygnus', 'lyra', 'canis-major', 'canis-minor', 'aquila']
  },
  navigation: {
    title: 'Navegación',
    description: 'Constelaciones históricamente usadas para navegación',
    icon: '🧭',
    color: '#98FB98',
    constellations: ['ursa-major', 'ursa-minor', 'draco', 'bootes']
  },
  modern: {
    title: 'Modernas',
    description: 'Constelaciones reconocidas en la astronomía moderna',
    icon: '🔭',
    color: '#DDA0DD',
    constellations: ['corona-borealis']
  }
};
