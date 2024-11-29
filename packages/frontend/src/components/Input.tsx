import React from 'react';

interface InputProps {
    value: string; // Valor del input
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Función que se ejecuta cuando el valor cambia
    placeholder?: string; // Texto de placeholder opcional
}

/**
 * Componente de input reutilizable.
 * Encapsula la lógica de un input de texto básico y sigue el principio de responsabilidad única (SRP).
 */
const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="input" // Clase CSS para el estilo
        />
    );
};

export default Input; // Exporta el componente para su uso en otros components
