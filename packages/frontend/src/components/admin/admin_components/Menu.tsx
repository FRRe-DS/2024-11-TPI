import React from 'react';

interface MenuProps {
    onSelect: (section: 'events' | 'sponsors') => void;
    selectedSection: 'events' | 'sponsors';  // Prop para saber qué sección está seleccionada
}

const Menu: React.FC<MenuProps> = ({ onSelect, selectedSection }) => {
    return (
        <nav className="flex space-x-4 p-4 bg-gray-200 rounded-md shadow-md">
            <button
                onClick={() => onSelect('events')}
                className={`px-4 py-2 font-semibold text-white rounded-md transition-colors duration-300 ${selectedSection === 'events' ? 'bg-blue-600' : 'bg-blue-400 hover:bg-blue-500'}`}
            >
                Manage Events
            </button>
            <button
                onClick={() => onSelect('sponsors')}
                className={`px-4 py-2 font-semibold text-white rounded-md transition-colors duration-300 ${selectedSection === 'sponsors' ? 'bg-blue-600' : 'bg-blue-400 hover:bg-blue-500'}`}
            >
                Manage Sponsors
            </button>
        </nav>
    );
};

export default Menu;