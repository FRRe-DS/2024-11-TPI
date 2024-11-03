import React from 'react';
import { getRole } from '../../auth/utils/AuthService.ts';
import UserLoggedInMenu from './UserLoggedInMenu.tsx';
import UserLoggedOutMenu from './UserLoggedOutMenu.tsx';

const UserMenu: React.FC = () => {
    const role = getRole(); // Obtiene el rol del usuario

    if (!role) {
        return <UserLoggedOutMenu />; // Si no hay rol, renderiza el menú de no logueado
    }

    return <UserLoggedInMenu role={role} />; // Si hay rol, renderiza el menú de logueado
};

export default UserMenu;