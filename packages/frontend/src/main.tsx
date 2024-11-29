import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';

// Ajustar el tamaño del viewport dinámicamente
const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Llamada inicial y escucha de cambios en el tamaño del viewport
setViewportHeight();
window.addEventListener('resize', setViewportHeight);

// Verifica las variables de entorno (solo en desarrollo)
if (import.meta.env.MODE === 'development') {
    console.log('Variables de entorno:', import.meta.env);
}

// Verifica si existe el contenedor principal antes de inicializar
const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("No se encontró el elemento #root en el DOM");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);