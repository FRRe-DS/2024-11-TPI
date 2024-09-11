import AppRouter from './router'; // Importa el componente `AppRouter`

/**
 * Componente principal de la aplicación.
 * Este componente envuelve toda la aplicación y la estructura básica, como la navegación.
 */
function App() {
    return (
        <div className="App min-h-screen flex flex-col"> {/* Asegura que la App ocupe al menos la altura completa de la pantalla */}
            <AppRouter /> {/* Renderiza las rutas de la aplicación a través del componente `AppRouter` */}
        </div>
    );
}

export default App; // Exporta el componente `App` como el componente principal de la aplicación
