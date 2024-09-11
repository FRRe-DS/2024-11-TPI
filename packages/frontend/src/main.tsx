import React from 'react'; // Importa React para utilizar JSX y otras funcionalidades de React
import ReactDOM from 'react-dom/client'; // Importa el método `ReactDOM` para renderizar el árbol de componentes de React en el DOM
import App from './App'; // Importa el componente principal `App`
import './style.css'; //Importa el css

// Selecciona el elemento raíz del DOM donde se montará la aplicación
const rootElement = document.getElementById('root') as HTMLElement;

// Crea el root usando el método `createRoot` de ReactDOM para soportar concurrent mode
const root = ReactDOM.createRoot(rootElement);

// Renderiza el componente `App` dentro del elemento root del DOM
root.render(
    <React.StrictMode> {/* Modo estricto de React para destacar problemas potenciales en la aplicación */}
        <App /> {/* Renderiza el componente `App`, que a su vez renderiza toda la aplicación */}
    </React.StrictMode>
);
