# Estructura de Carpetas
## Frontend
src/: Contiene el código fuente de la aplicación.

- assets/: Archivos estáticos como imágenes y fuentes.
- components/: Componentes reutilizables de la aplicación.
- layout/: Componentes que afectan el diseño general (por ejemplo, Navbar, Footer).
- ui/: Componentes de interfaz de usuario como botones e inputs.
- domain/: Componentes específicos de dominio (por ejemplo, EventCard, ArtistCard).
- hooks/: Hooks personalizados.
- pages/: Vistas completas.
- Home.tsx: Página de inicio.
- Events.tsx: Página que muestra actividades.
- CreateActivity.tsx: Página para crear nuevas actividades.
- services/: Servicios para interactuar con la API (por ejemplo, EventService.ts).
- styles/: Estilos globales y específicos.
- utils/: Funciones y utilidades generales.
- App.tsx: Componente principal de la aplicación.
- main.tsx: Punto de entrada de la aplicación.
- .tsx: Configuración de rutas.
- public/: Archivos estáticos que no se procesan por Webpack.

## Backend
- src/: Contiene el código fuente del backend.
- config/: Configuraciones de la aplicación (por ejemplo, database.js).
- controllers/: Controladores para manejar la lógica de negocio (por ejemplo, eventController.js).
- models/: Modelos de datos para la base de datos (por ejemplo, event.js, sculptor.js).
- routes/: Rutas de la API (por ejemplo, eventRoutes.js).
- middlewares/: Middlewares para autenticación y autorización.
- utils/: Utilidades generales para el backend.
- index.js: Archivo de entrada para iniciar el servidor.
- tests/: Archivos de prueba para el backend.