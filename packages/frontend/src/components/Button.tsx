import React from 'react';

interface ButtonProps {
    label: string; // Texto que aparecerá en el botón
    onClick: () => void; // Función que se ejecuta al hacer clic en el botón
}

/**
 * Componente de botón reutilizable.
 * Este componente sigue el principio de responsabilidad única (SRP) y puede ser utilizado en diferentes partes de la aplicación.
 */
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className="btn"> {/* Manejador de clics y clase de CSS */}
            {label} {/* Texto dentro del botón */}
        </button>
    );
};

export default Button; // Exporta el componente para su uso en otros componentes
