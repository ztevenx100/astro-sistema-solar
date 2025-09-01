// Categorización temática de las constelaciones
export const constellationCategories = {
  zodiac: {
    name: 'Zodíaco',
    color: '#FFD700',
    description: 'Las 12 constelaciones del zodíaco',
    position: { sector: 'inner', ring: 1 },
    constellations: [
      'aries', 'taurus', 'gemini', 'cancer', 
      'leo', 'virgo', 'libra', 'scorpius',
      'sagittarius', 'capricornus', 'aquarius', 'pisces'
    ]
  },
  
  mythological: {
    name: 'Mitológicas',
    color: '#87CEEB',
    description: 'Constelaciones con historias épicas',
    position: { sector: 'north', ring: 2 },
    constellations: [
      'orion', 'cassiopeia', 'andromeda', 'perseus',
      'hercules', 'pegasus', 'cygnus', 'aquila'
    ]
  },
  
  navigation: {
    name: 'Navegación',
    color: '#98FB98',
    description: 'Constelaciones usadas para orientación',
    position: { sector: 'south', ring: 2 },
    constellations: [
      'ursa-major', 'ursa-minor', 'crux', 'draco'
    ]
  },
  
  modern: {
    name: 'Modernas',
    color: '#DDA0DD',
    description: 'Constelaciones del hemisferio sur',
    position: { sector: 'outer', ring: 3 },
    constellations: [
      'lyra', 'corona-borealis', 'bootes', 'canis-major',
      'canis-minor', 'crater'
    ]
  }
};

// Configuración de distribución espacial
export const spatialConfig = {
  rings: {
    inner: { radius: 20, maxConstellations: 12 },
    middle: { radius: 35, maxConstellations: 12 },
    outer: { radius: 50, maxConstellations: 8 }
  },
  
  sectors: {
    north: { startAngle: 315, endAngle: 45 },
    east: { startAngle: 45, endAngle: 135 },
    south: { startAngle: 135, endAngle: 225 },
    west: { startAngle: 225, endAngle: 315 }
  }
};

export const getConstellationPosition = (category: string, index: number) => {
  const cat = constellationCategories[category];
  const ring = spatialConfig.rings[cat.position.ring === 1 ? 'inner' : 
                                  cat.position.ring === 2 ? 'middle' : 'outer'];
  
  const totalInCategory = cat.constellations.length;
  const angleStep = 360 / totalInCategory;
  const angle = index * angleStep;
  
  return {
    x: 50 + ring.radius * Math.cos((angle * Math.PI) / 180),
    y: 50 + ring.radius * Math.sin((angle * Math.PI) / 180),
    category: category,
    ring: cat.position.ring
  };
};
