/**
 * Sistema de Z-Index organizado para evitar solapamientos
 * Valores más altos aparecen encima de valores más bajos
 */

export const Z_INDEX = {
  // Fondo y elementos base
  BACKGROUND: 1,
  STARFIELD: 5,
  
  // Sistema Solar
  SOLAR_SYSTEM: 10,
  PLANETS: 15,
  SUN: 20,
  ORBITS: 5,
  
  // Constelaciones (en sección de constelaciones)
  CONSTELLATION_LINES: 15,
  CONSTELLATION_STARS: 20,
  CONSTELLATION_INFO: 25,
  
  // UI del Sistema Solar
  SOLAR_SYSTEM_NAV: 40,
  SIMULATION_CONTROLS: 50,
  
  // UI de Constelaciones (cuando están activas)
  CONSTELLATION_MINIMAP: 700,
  CONSTELLATION_SEARCH: 800,
  CONSTELLATION_FILTERS: 850,
  SECTION_NAVIGATION: 900,
  
  // Modales y overlays críticos
  MODAL_BACKDROP: 1000,
  MODAL_CONTENT: 1100,
  TOOLTIP: 1200,
  
  // Elementos de máxima prioridad
  NOTIFICATION: 9999
} as const;

export type ZIndexLevel = typeof Z_INDEX[keyof typeof Z_INDEX];
