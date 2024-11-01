// src/domain/component/DarkModeToggle.tsx
import React from 'react';

interface DarkModeToggleProps {
    toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ toggleDarkMode }) => {
    return (
        <button onClick={toggleDarkMode} className="text-white">
            {/* Aquí iría el contenido del botón para cambiar el modo oscuro */}
            Toggle Dark Mode
        </button>
    );
};

export default DarkModeToggle;
