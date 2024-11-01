// src/features/user/components/UserMenu.tsx

import React, { useState } from 'react';
import useUser from '../hooks/useUser';  // Ruta actualizada al nuevo hook
import { Link } from 'react-router-dom';

const UserMenu: React.FC = () => {
    const { user, loading, handleLogout } = useUser();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={toggleMenu}
                    className="flex items-center justify-center w-32 h-10 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none"
                >
                    {loading ? 'Cargando...' : user ? user.username : 'Iniciar sesión'}
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                    <div className="py-1">
                        {user ? (
                            <>
                                <Link to="/vote" onClick={handleCloseMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    Votar
                                </Link>
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        handleCloseMenu();
                                    }}
                                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                                >
                                    Cerrar sesión
                                </button>
                            </>
                        ) : (
                            <Link to="/login" onClick={handleCloseMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Iniciar sesión
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;