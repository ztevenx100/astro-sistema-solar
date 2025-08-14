# 🌌 Sistema Solar Interactivo

Una experiencia educativa inmersiva y científicamente precisa del sistema solar, construida con Astro, TypeScript y diseño moderno.

![Sistema Solar Preview](https://img.shields.io/badge/Astro-Framework-orange) ![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-cyan) ![Responsive](https://img.shields.io/badge/Design-Responsive-green)

## ✨ Características Principales

### 🪐 **Simulación Orbital Realista**
- Órbitas circulares precisas con velocidades relativas
- Animaciones CSS nativas para máximo rendimiento
- Controles de simulación (play/pause/velocidad)
- Visualización a escala del sistema solar

### 🔬 **Análisis Científico Avanzado**
- **Comparaciones con la Tierra**: Tamaño, masa, gravedad, distancia
- **Cálculos Físicos Reales**: Velocidad orbital, velocidad de escape, densidad
- **Análisis de Habitabilidad**: Puntuación científica basada en múltiples factores
- **Datos Actualizados**: Información de NASA, ESA y agencias espaciales

### 📊 **Visualizaciones Interactivas**
- Gráficos de barras comparativos animados
- Escala visual de temperaturas del sistema solar
- Comparación de masas con representación proporcional
- Datos contextualizados y fáciles de entender

### 🚀 **Exploración Espacial**
- Base de datos completa de misiones históricas
- Cronología de exploración por planeta
- Misiones futuras y planes de agencias espaciales
- Impacto científico y tecnológico detallado

### 🧭 **Experiencia de Usuario Avanzada**
- Navegación fluida entre planetas
- Diseño responsive (móvil-first)
- Efectos visuales con Glass Design
- Controles de simulación interactivos

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework web moderno para sitios rápidos
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado fuerte para mejor mantenibilidad
- **[TailwindCSS](https://tailwindcss.com/)** - Framework CSS utilitario
- **CSS Animations** - Animaciones nativas para mejor rendimiento
- **Responsive Design** - Optimizado para todos los dispositivos

## 🚀 Estructura del Proyecto

```text
src/
├── components/
│   ├── Planet.astro              # Componente individual de planeta
│   ├── SolarSystem.astro         # Sistema solar principal
│   ├── SimulationControls.astro  # Controles de simulación
│   ├── Starfield.astro          # Fondo estrellado animado
│   ├── PlanetComparison.astro    # Comparaciones científicas
│   ├── ScientificData.astro      # Datos científicos avanzados
│   ├── DataVisualization.astro   # Gráficos y visualizaciones
│   ├── SpaceMissions.astro       # Misiones espaciales
│   └── PlanetNavigation.astro    # Navegación entre planetas
├── data/
│   └── planets.ts               # Base de datos de planetas
├── pages/
│   ├── index.astro              # Página principal
│   └── planets/
│       └── [planet].astro       # Páginas dinámicas de planetas
├── layouts/
│   └── Layout.astro             # Layout principal
└── styles/
    └── global.css               # Estilos globales y animaciones
```

## 🎯 Características Detalladas

### 🌟 **Páginas de Planetas Mejoradas**

Cada planeta incluye:

- **Visualización 3D Simulada**: Representación visual realista
- **Datos Científicos Completos**: 
  - Clasificación planetaria (rocoso, gigante gaseoso, etc.)
  - Mecánica orbital detallada
  - Análisis de habitabilidad
  - Composición atmosférica e interna
- **Comparaciones Contextualizadas**: Todo comparado con la Tierra
- **Historia de Exploración**: Misiones pasadas, presentes y futuras
- **Navegación Intuitiva**: Entre planetas con vista previa

### 📈 **Visualizaciones de Datos**

- **Gráficos Comparativos**: Tamaños, distancias, temperaturas
- **Escala de Masas**: Representación proporcional visual
- **Línea de Tiempo**: Temperaturas del sistema solar
- **Animaciones Suaves**: Transiciones CSS optimizadas

### 🎮 **Controles Interactivos**

- **Play/Pause**: Control total de la simulación
- **Velocidad Variable**: 0.5x a 3x velocidad normal
- **Enfoque de Planetas**: Centrar vista en planeta específico
- **🌌 Constelaciones Navegables**: Click en constelaciones para navegar entre planetas
- **⌨️ Navegación por Teclado**: Teclas 1-8 para acceso directo a planetas
- **🖱️ Efectos de Paralaje**: Movimiento del mouse crea profundidad visual

### 🌟 **Constelaciones Interactivas** (NUEVO)

- **8 Constelaciones Reales**: Osa Mayor, Orión, Casiopea, Leo, Acuario, Géminis, Escorpión, Cisne
- **Navegación Temática**: Cada constelación conecta con un planeta específico
- **Efectos Visuales Inmersivos**: Estrellas que brillan, líneas que se iluminan, efecto hiperespacio
- **Información Astronómica**: Tooltips con datos de mitología y astronomía
- **Estrellas Fugaces**: Meteoros animados que cruzan el cielo
- **Nebulosas Ambientales**: Nubes cósmicas que derivan suavemente
- **Responsive**: Controles optimizados para móvil

## 🧞 Comandos de Desarrollo

| Comando | Acción |
|---------|--------|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Construye el sitio para producción |
| `npm run preview` | Vista previa del build local |
| `npm run astro check` | Verificación de tipos TypeScript |

## 🎓 Valor Educativo

### **Contenido Científico Riguroso**
- Datos actualizados de fuentes oficiales (NASA, ESA)
- Cálculos físicos implementados con fórmulas reales
- Contexto histórico de la exploración espacial
- Información adaptada para diferentes niveles educativos

### **Metodología Interactiva**
- Aprendizaje visual con gráficos intuitivos
- Comparaciones que facilitan la comprensión
- Exploración libre y no linear
- Datos contextualizados y comprensibles

## 🌍 Datos de Planetas Incluidos

El proyecto incluye información completa de todos los planetas:

- **Mercurio** - El mundo más cercano al Sol
- **Venus** - El planeta más caliente
- **Tierra** - Nuestro hogar cósmico
- **Marte** - El planeta rojo
- **Júpiter** - El gigante gaseoso
- **Saturno** - El señor de los anillos
- **Urano** - El gigante inclinado
- **Neptuno** - El mundo más distante

Cada uno con:
- ✅ 15+ datos científicos precisos
- ✅ Análisis de habitabilidad
- ✅ Historia de exploración espacial
- ✅ Comparaciones contextualizadas
- ✅ Visualizaciones interactivas

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ instalado
- npm o yarn como gestor de paquetes

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/astro-sistema-solar.git

# Navegar al directorio
cd astro-sistema-solar

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Despliegue

```bash
# Construir para producción
npm run build

# Vista previa local del build
npm run preview
```

## 🎨 Componentes Principales

### `PlanetComparison.astro`
Componente que muestra comparaciones científicas detalladas entre planetas y la Tierra.

### `ScientificData.astro`
Presenta datos científicos avanzados incluyendo análisis de habitabilidad y clasificación planetaria.

### `DataVisualization.astro`
Genera gráficos interactivos y visualizaciones de datos comparativos.

### `SpaceMissions.astro`
Base de datos completa de misiones espaciales históricas y futuras por planeta.

### `SimulationControls.astro`
Controles interactivos para la simulación orbital (play/pause/velocidad).

## 🔮 Futuras Mejoras

- [ ] Modelo 3D interactivo de planetas
- [ ] Simulador de trayectorias espaciales
- [ ] Realidad aumentada (AR)
- [ ] Datos en tiempo real de sondas activas
- [ ] Modo VR para exploración inmersiva
- [ ] API para datos dinámicos
- [ ] Integración con telescopios en tiempo real
- [ ] Calculadora de misiones espaciales

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Contribución

- Mantén el código limpio y bien documentado
- Asegúrate de que los datos científicos sean precisos
- Incluye tests para nuevas funcionalidades
- Sigue las convenciones de naming establecidas

## 📊 Métricas del Proyecto

- **8 Componentes** principales de planetas
- **15+ Datos científicos** por planeta
- **20+ Misiones espaciales** documentadas
- **100% Responsive** design
- **TypeScript** para type safety
- **0 Errores** de compilación

## 🔬 Precisión Científica

Todos los datos incluidos en el proyecto provienen de fuentes oficiales:

- **NASA Jet Propulsion Laboratory**
- **European Space Agency (ESA)**
- **Japan Aerospace Exploration Agency (JAXA)**
- **Roscosmos**
- **Publicaciones científicas revisadas por pares**

## 📱 Compatibilidad

- ✅ Chrome/Chromium 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móviles iOS/Android
- ✅ Tablets y pantallas grandes

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- **NASA** por los datos científicos precisos
- **ESA** por información de misiones europeas
- **Astro Team** por el excelente framework
- **TailwindCSS** por el sistema de diseño
- **Comunidad Open Source** por las herramientas utilizadas

---

### 🌟 ¿Te gustó el proyecto?

Si este proyecto te resultó útil o educativo, considera:

- Darle una ⭐ en GitHub
- Compartirlo con otros entusiastas del espacio
- Contribuir con mejoras o nuevas características
- Reportar bugs o sugerir mejoras

**¡Explora el cosmos desde tu navegador! 🚀**

---

*Desarrollado con ❤️ y precisión científica para educar e inspirar sobre las maravillas de nuestro sistema solar.*
