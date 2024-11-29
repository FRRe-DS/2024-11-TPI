import React from 'react';
import { Link } from 'react-router-dom';

const UserLoggedOutMenu: React.FC = () => {
    return (
        <div className="flex items-center">
            <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Iniciar sesión</Link>
            <Link to="/registrarse" className="ml-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Registrarse</Link>
        </div>
    );
};

export default UserLoggedOutMenu;
