
# Frontend
* src/ Contiene todo el código fuente de tu aplicación.
* components/ Almacena todos los componentes reutilizables de tu aplicación.
* domain/ componentes que están directamente relacionados con la lógica de negocio o el dominio de la aplicación.
* layout/ componentes que se encargan de la estructura y diseño general de la aplicación (por ejemplo, Navbar, Footer, Sidebar).
* ui/ componentes más específicos de la interfaz de usuario que pueden ser reutilizados en diferentes partes de la aplicación (por ejemplo, botones, formularios, tarjetas).
* navbar.tsx: Este archivo se encuentra en components/ directamente, y es específico para el componente Navbar
* hooks/ Contiene custom hooks (hooks personalizados) que encapsulan lógica reutilizable para tus componentes de React. Esto ayuda a mantener los componentes limpios y la lógica separada.
* pages/ Almacena los componentes que representan páginas completas o vistas dentro de tu aplicación. Cada archivo en esta carpeta representa una página diferente, como Home, About, Events, etc.
* services/ Contiene código relacionado con la comunicación con APIs y otras fuentes de datos. Aquí podrías colocar funciones o clases para hacer peticiones HTTP, manejar datos de la API, etc.
* main.tsx es el archivo de entrada principal en una aplicación React que configura el entorno de renderizado, monta el componente raíz de la aplicación en el DOM del navegador y aplica configuraciones globales, como el modo estricto de React.
* App.tsx es el componente principal de la aplicación React que envuelve toda la aplicación en un contenedor, configura las rutas mediante AppRouter y aplica estilos globales.
* AppRouter es un componente que configura y gestiona las rutas de la aplicación, permitiendo la navegación entre diferentes páginas como Home, About, y Events, utilizando react-router-dom.

# Estructura Sugerida:
* src/
* assets/: Archivos estáticos como imágenes, fuentes, etc.
* footer/
* Hero/
* Navbar/
* components/: Componentes reutilizables divididos por responsabilidad.
* domain/: Componentes relacionados con el dominio de tu aplicación (ej. EventCard, ArtistCard).
* layout/: Componentes relacionados con la estructura de la página (ej. Navbar, Footer, Sidebar).
* ui/: Componentes más generales y pequeños (ej. Button, InputField).
* hooks/: Hooks personalizados que encapsulan lógica reutilizable.
* useAuth.ts: Encapsula la lógica de autenticación.
* useEvents.ts: Encapsula la lógica relacionada con eventos.
* pages/: Vistas o páginas completas de la aplicación.
* About.tsx: Página "Sobre nosotros".
* Activities.tsx: Página "Eventos".
* Home.tsx: Página de inicio.
* services/: Servicios que manejan la lógica de negocio, como llamadas a API.
* AuthService.ts: Servicio de autenticación.
* EventService.ts: Servicio para manejar eventos.
* ImageService.ts: Servicio para manejar imágenes.
* styles/: Estilos globales y específicos.
* globals.css: Estilos generales de la aplicación.
* component-specific.css: Estilos para componentes específicos.
* utils/: Utilidades generales y funciones helper.
* formatDate.ts: Función para formatear fechas.
* calculateAge.ts: Función para calcular edades.
* App.tsx: Componente principal de la aplicación.
* main.tsx: Punto de entrada de la aplicación.
* router.tsx: Configuración de rutas.
* index.html: Archivo HTML principal
