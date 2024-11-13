import React from 'react';

type MenuProps = {
    onSelect: (section: 'events' | 'sculptures' | 'sculptors') => void;
    selectedSection: 'events' | 'sculptures' | 'sculptors';
};

const Menu: React.FC<MenuProps> = ({ onSelect, selectedSection }) => {
    const menuItems = [
        { label: 'Eventos', value: 'events' },
        { label: 'Esculturas', value: 'sculptures' },
        { label: 'Escultores', value: 'sculptors' },
    ];

    return (
        <div className="flex justify-center items-center my-8"> {/* Asegurando que esté centrado */}
            <div className="flex space-x-6 justify-center items-center"> {/* Espaciado entre botones */}
                {menuItems.map((item) => (
                    <button
                        key={item.value}
                        onClick={() => onSelect(item.value as 'events' | 'sculptures' | 'sculptors')}
                        className={`relative font-semibold text-white cursor-pointer border-none rounded-full w-36 h-14 z-10 overflow-hidden
                            ${
                            selectedSection === item.value
                                ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                                : 'bg-gradient-to-r from-gray-500 to-gray-700 hover:from-purple-500 hover:to-blue-500'
                        }
                        `}
                    >
                        <span className="absolute inset-0 flex items-center justify-center text-lg z-10 backdrop-blur-lg">
                            {item.label}
                        </span>

                        {/* Blobs de fondo */}
                        <span className="blob absolute top-0 left-0 w-20 h-12 rounded-full bg-orange-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                        <span className="blob absolute top-0 left-7 w-20 h-12 rounded-full bg-purple-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                        <span className="blob absolute top-[-1em] left-16 w-20 h-12 rounded-full bg-pink-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                        <span className="blob absolute top-6 left-20 w-20 h-12 rounded-full bg-blue-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Menu;