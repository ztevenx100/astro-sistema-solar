export interface Planet {
  id: string;
  name: string;
  englishName: string;
  diameter: number; // km
  mass: number; // kg (scientific notation)
  distanceFromSun: number; // million km
  orbitalPeriod: number; // Earth days
  rotationPeriod: number; // hours
  moons: number;
  temperature: {
    min: number;
    max: number;
  };
  color: string;
  gradient: string;
  description: string;
  funFacts: string[];
  image: string;
  orbitRadius: number; // pixels for animation
  orbitSpeed: number; // animation duration in seconds
  composition: string;
  atmosphere: string;
  size: number; // relative size for display
  distance: string; // formatted distance string
  orbitalPeriodFormatted: string; // formatted orbital period
  rotationPeriodFormatted: string; // formatted rotation period
  temperatureFormatted: string; // formatted temperature range
}

export const planetsData: Planet[] = [
  {
    id: 'mercury',
    name: 'Mercurio',
    englishName: 'Mercury',
    diameter: 4879,
    mass: 3.3011e23,
    distanceFromSun: 58,
    orbitalPeriod: 88,
    rotationPeriod: 1407.6,
    moons: 0,
    temperature: { min: -173, max: 427 },
    color: '#8C7853',
    gradient: 'from-gray-400 to-yellow-600',
    description: 'Mercurio es el planeta más pequeño del sistema solar y el más cercano al Sol. Su superficie está llena de cráteres similares a los de la Luna.',
    funFacts: [
      'Un día en Mercurio dura más que un año mercuriano',
      'Tiene la órbita más excéntrica de todos los planetas',
      'Su núcleo de hierro es proporcionalmente el más grande del sistema solar',
      'No tiene atmósfera significativa'
    ],
    image: '/assets/planets/mercury.jpg',
    orbitRadius: 120,
    orbitSpeed: 15,
    composition: 'Núcleo de hierro (75% del radio), manto de silicatos rocosos, corteza delgada de basalto',
    atmosphere: 'Prácticamente inexistente - trazas de oxígeno, sodio, hidrógeno, helio y potasio',
    size: 12,
    distance: '58 millones de km',
    orbitalPeriodFormatted: '88 días terrestres',
    rotationPeriodFormatted: '58.6 días terrestres',
    temperatureFormatted: '-173°C a 427°C'
  },
  {
    id: 'venus',
    name: 'Venus',
    englishName: 'Venus',
    diameter: 12104,
    mass: 4.8675e24,
    distanceFromSun: 108,
    orbitalPeriod: 225,
    rotationPeriod: -5832.5, // rotación retrógrada
    moons: 0,
    temperature: { min: 462, max: 462 }, // superficie constante debido al efecto invernadero
    color: '#FFC649',
    gradient: 'from-yellow-400 to-orange-500',
    description: 'Venus es conocido como el "gemelo maligno" de la Tierra debido a su tamaño similar pero condiciones extremas. Es el planeta más caliente del sistema solar.',
    funFacts: [
      'Un día venusiano dura más que un año venusiano',
      'Rota en dirección opuesta a la mayoría de los planetas',
      'Su atmósfera es tan densa que la presión superficial es 90 veces mayor que la terrestre',
      'Llueve ácido sulfúrico en su atmósfera superior'
    ],
    image: '/assets/planets/venus.jpg',
    orbitRadius: 140,
    orbitSpeed: 20,
    composition: 'Núcleo de hierro y níquel, manto de roca fundida, corteza de basalto volcánico',
    atmosphere: '96% dióxido de carbono, 3.5% nitrógeno, trazas de vapor de agua y ácido sulfúrico',
    size: 16,
    distance: '108 millones de km',
    orbitalPeriodFormatted: '225 días terrestres',
    rotationPeriodFormatted: '243 días terrestres (retrógrada)',
    temperatureFormatted: '462°C constante'
  },
  {
    id: 'earth',
    name: 'Tierra',
    englishName: 'Earth',
    diameter: 12756,
    mass: 5.9724e24,
    distanceFromSun: 150,
    orbitalPeriod: 365.25,
    rotationPeriod: 24,
    moons: 1,
    temperature: { min: -89, max: 58 },
    color: '#6B93D6',
    gradient: 'from-blue-400 to-green-500',
    description: 'La Tierra es el único planeta conocido que alberga vida. Sus océanos, atmósfera y clima moderado crean las condiciones perfectas para la vida tal como la conocemos.',
    funFacts: [
      'Es el único planeta con agua líquida en su superficie',
      'Su atmósfera protege de la radiación espacial dañina',
      'La Luna estabiliza su rotación y crea las mareas',
      'Tiene el campo magnético más fuerte de los planetas rocosos'
    ],
    image: '/assets/planets/earth.jpg',
    orbitRadius: 160,
    orbitSpeed: 25,
    composition: 'Núcleo de hierro y níquel, manto de silicatos, corteza de rocas ígneas y sedimentarias',
    atmosphere: '78% nitrógeno, 21% oxígeno, 1% otros gases (argón, CO2, vapor de agua)',
    size: 18,
    distance: '150 millones de km (1 UA)',
    orbitalPeriodFormatted: '365.25 días (1 año)',
    rotationPeriodFormatted: '24 horas (1 día)',
    temperatureFormatted: '-89°C a 58°C'
  },
  {
    id: 'mars',
    name: 'Marte',
    englishName: 'Mars',
    diameter: 6792,
    mass: 6.4171e23,
    distanceFromSun: 228,
    orbitalPeriod: 687,
    rotationPeriod: 24.7,
    moons: 2,
    temperature: { min: -87, max: -5 },
    color: '#CD5C5C',
    gradient: 'from-red-500 to-orange-600',
    description: 'Marte, el "Planeta Rojo", es el cuarto planeta desde el Sol. Su color rojizo se debe al óxido de hierro en su superficie. Es el objetivo principal para futuras misiones tripuladas.',
    funFacts: [
      'Tiene el volcán más grande del sistema solar: Olympus Mons',
      'Un día marciano dura aproximadamente lo mismo que un día terrestre',
      'Sus casquetes polares están hechos de hielo de agua y CO2 congelado',
      'Tiene evidencia de agua líquida en el pasado'
    ],
    image: '/assets/planets/mars.jpg',
    orbitRadius: 180,
    orbitSpeed: 30,
    composition: 'Núcleo de hierro, azufre y níquel, manto de silicatos, corteza basáltica rica en hierro',
    atmosphere: '95% dióxido de carbono, 3% nitrógeno, 2% argón, trazas de oxígeno y vapor de agua',
    size: 14,
    distance: '228 millones de km',
    orbitalPeriodFormatted: '687 días terrestres (1.9 años)',
    rotationPeriodFormatted: '24.6 horas',
    temperatureFormatted: '-87°C a -5°C'
  },
  {
    id: 'jupiter',
    name: 'Júpiter',
    englishName: 'Jupiter',
    diameter: 142984,
    mass: 1.8982e27,
    distanceFromSun: 778,
    orbitalPeriod: 4331,
    rotationPeriod: 9.9,
    moons: 95,
    temperature: { min: -108, max: -108 },
    color: '#D8CA9D',
    gradient: 'from-yellow-600 to-red-600',
    description: 'Júpiter es el planeta más grande del sistema solar. Este gigante gaseoso podría contener todos los demás planetas en su interior. Actúa como un "aspirador cósmico" protegiendo a los planetas interiores.',
    funFacts: [
      'Es más masivo que todos los otros planetas combinados',
      'Tiene un día de menos de 10 horas a pesar de su tamaño',
      'La Gran Mancha Roja es una tormenta más grande que la Tierra',
      'Podría haber sido una estrella si hubiera sido más masivo'
    ],
    image: '/assets/planets/jupiter.jpg',
    orbitRadius: 240,
    orbitSpeed: 40,
    composition: 'Núcleo rocoso, capas de hidrógeno metálico líquido, atmósfera de hidrógeno y helio',
    atmosphere: '89% hidrógeno, 10% helio, 1% metano, amoníaco y vapor de agua',
    size: 35,
    distance: '778 millones de km',
    orbitalPeriodFormatted: '11.9 años terrestres',
    rotationPeriodFormatted: '9.9 horas',
    temperatureFormatted: '-108°C (atmósfera superior)'
  },
  {
    id: 'saturn',
    name: 'Saturno',
    englishName: 'Saturn',
    diameter: 120536,
    mass: 5.6834e26,
    distanceFromSun: 1432,
    orbitalPeriod: 10747,
    rotationPeriod: 10.7,
    moons: 146,
    temperature: { min: -139, max: -139 },
    color: '#FAD5A5',
    gradient: 'from-yellow-300 to-yellow-600',
    description: 'Saturno es famoso por su espectacular sistema de anillos. Es el segundo planeta más grande y tiene una densidad tan baja que flotaría en el agua.',
    funFacts: [
      'Tiene la densidad más baja de todos los planetas',
      'Sus anillos están hechos principalmente de hielo de agua',
      'Titán, su luna más grande, tiene lagos de metano líquido',
      'Tiene un extraño hexágono en su polo norte'
    ],
    image: '/assets/planets/saturn.jpg',
    orbitRadius: 280,
    orbitSpeed: 50,
    composition: 'Núcleo rocoso y metálico, capas de hidrógeno metálico, atmósfera de hidrógeno y helio',
    atmosphere: '96% hidrógeno, 3% helio, 1% metano y amoníaco',
    size: 32,
    distance: '1.432 mil millones de km',
    orbitalPeriodFormatted: '29.4 años terrestres',
    rotationPeriodFormatted: '10.7 horas',
    temperatureFormatted: '-139°C (atmósfera superior)'
  },
  {
    id: 'uranus',
    name: 'Urano',
    englishName: 'Uranus',
    diameter: 51118,
    mass: 8.6810e25,
    distanceFromSun: 2867,
    orbitalPeriod: 30589,
    rotationPeriod: -17.2, // rotación retrógrada
    moons: 27,
    temperature: { min: -197, max: -197 },
    color: '#4FD0E3',
    gradient: 'from-cyan-400 to-blue-500',
    description: 'Urano es único en el sistema solar porque rota de lado. Este gigante de hielo tiene un color azul-verde distintivo debido al metano en su atmósfera.',
    funFacts: [
      'Rota completamente de lado con una inclinación de 98 grados',
      'Fue el primer planeta descubierto con telescopio',
      'Tiene anillos verticales en lugar de horizontales',
      'Un año uraniano dura 84 años terrestres'
    ],
    image: '/assets/planets/uranus.jpg',
    orbitRadius: 320,
    orbitSpeed: 60,
    composition: 'Núcleo rocoso, manto de agua, metano y amoníaco, atmósfera de hidrógeno y helio',
    atmosphere: '83% hidrógeno, 15% helio, 2% metano, trazas de agua y amoníaco',
    size: 22,
    distance: '2.867 mil millones de km',
    orbitalPeriodFormatted: '84 años terrestres',
    rotationPeriodFormatted: '17.2 horas (retrógrada)',
    temperatureFormatted: '-197°C'
  },
  {
    id: 'neptune',
    name: 'Neptuno',
    englishName: 'Neptune',
    diameter: 49528,
    mass: 1.02413e26,
    distanceFromSun: 4515,
    orbitalPeriod: 59800,
    rotationPeriod: 16.1,
    moons: 16,
    temperature: { min: -201, max: -201 },
    color: '#4B70DD',
    gradient: 'from-blue-600 to-indigo-700',
    description: 'Neptuno es el planeta más alejado del Sol y el más ventoso del sistema solar. Sus vientos pueden alcanzar velocidades de hasta 2,100 km/h.',
    funFacts: [
      'Tiene los vientos más fuertes del sistema solar',
      'Un año neptuniano dura 165 años terrestres',
      'Fue descubierto mediante cálculos matemáticos, no observación',
      'Su luna Tritón orbita en dirección retrógrada'
    ],
    image: '/assets/planets/neptune.jpg',
    orbitRadius: 360,
    orbitSpeed: 70,
    composition: 'Núcleo rocoso y metálico, manto de agua, metano y amoníaco, atmósfera de hidrógeno y helio',
    atmosphere: '80% hidrógeno, 19% helio, 1% metano, trazas de agua y amoníaco',
    size: 21,
    distance: '4.515 mil millones de km',
    orbitalPeriodFormatted: '165 años terrestres',
    rotationPeriodFormatted: '16.1 horas',
    temperatureFormatted: '-201°C'
  }
];

export interface Sun {
  id: string;
  name: string;
  englishName: string;
  diameter: number; // km
  mass: number; // kg (scientific notation)
  temperature: {
    core: number;
    surface: number;
  };
  color: string;
  gradient: string;
  description: string;
  funFacts: string[];
  composition: string;
  size: number; // relative size for display
  temperatureFormatted: string;
}

export const sunData: Sun = {
  id: 'sun',
  name: 'Sol',
  englishName: 'Sun',
  diameter: 1392700, // km
  mass: 1.989e30, // kg
  temperature: {
    core: 15000000, // °C
    surface: 5500 // °C
  },
  color: '#FDB813',
  gradient: 'from-yellow-300 via-yellow-500 to-orange-600',
  description: 'El Sol es la estrella en el centro de nuestro sistema solar. Es una esfera casi perfecta de plasma caliente, con movimiento convectivo interno que genera un campo magnético.',
  funFacts: [
    'Contiene el 99.86% de la masa del sistema solar',
    'Cada segundo convierte 600 millones de toneladas de hidrógeno en helio',
    'Su luz tarda 8 minutos y 20 segundos en llegar a la Tierra',
    'Su temperatura central es de 15 millones de grados Celsius',
    'Es una estrella de tamaño mediano comparada con otras estrellas',
    'Se formó hace aproximadamente 4.6 mil millones de años'
  ],
  composition: '73% hidrógeno, 25% helio, 2% elementos más pesados (oxígeno, carbono, neón, hierro)',
  size: 50, // relative size for display
  temperatureFormatted: 'Núcleo: 15,000,000°C | Superficie: 5,500°C'
};
