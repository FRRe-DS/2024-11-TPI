import React from 'react';
import { getRole, logout } from "../../../features/auth/utils/AuthService.ts"; // Asegúrate de importar logout

const CircleIndicator = ({ isAdmin }: { isAdmin: boolean }) => {
    return (
        <div
            className={`w-5 h-5 rounded-full ${isAdmin ? 'bg-green-500' : 'bg-red-500'} mr-2`}
        ></div>
    );
};

const UserRoleIndicator: React.FC = () => {
    const role = getRole(); // Obtiene el rol del usuario
    const isAdmin = role === 'admin'; // Verifica si el rol es admin

    const handleLogoutClick = () => {
        logout(); // Llama a la función de logout
        window.location.reload(); // Recarga la página para actualizar el estado
    };

    return (
        <div className="flex items-center bg-gray-100 p-2 border rounded-md shadow hover:bg-gray-200">
            <CircleIndicator isAdmin={isAdmin} />
            <span className="text-gray-700">{isAdmin ? 'Eres administrador.' : 'No eres administrador.'}</span>
            <button
                onClick={handleLogoutClick}
                className="ml-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
            >
                Cerrar sesión
            </button>
        </div>
    );
};

export default UserRoleIndicator;
