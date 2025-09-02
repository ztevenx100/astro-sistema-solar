/**
 * Configuración de posiciones para evitar solapamientos entre paneles
 */

export const PANEL_POSITIONS = {
  // Sistema Solar (sección superior)
  SOLAR_SYSTEM_NAV: {
    top: '1.5rem',
    left: '1.5rem',
    width: '280px'
  },
  
  SIMULATION_CONTROLS: {
    bottom: '1.5rem',
    right: '1.5rem'
  },
  
  // Constelaciones (sección inferior)
  CONSTELLATION_SEARCH: {
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    maxWidth: '500px'
  },
  
  CONSTELLATION_MINIMAP: {
    bottom: '20px',
    left: '20px',
    width: '280px'
  },
  
  CONSTELLATION_FILTERS: {
    top: '50%',
    left: '20px',
    transform: 'translateY(-50%)',
    width: '250px'
  },
  
  // Navegación entre secciones
  SECTION_NAVIGATION: {
    right: '2rem',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  
  SCROLL_HINT: {
    bottom: '2rem',
    right: '50%',
    transform: 'translateX(50%)'
  }
} as const;

export const BREAKPOINTS = {
  MOBILE: '768px',
  TABLET: '1024px',
  DESKTOP: '1200px'
} as const;
