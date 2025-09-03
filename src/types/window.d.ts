// Declaraciones globales para el objeto window
declare global {
  interface Window {
    constellationFilters: {
      currentCategory: string;
      updateCategory: (category: string) => void;
    };
  }
}

export {};
