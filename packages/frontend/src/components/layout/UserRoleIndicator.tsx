import React from 'react';
import { getRole } from "../../services/AuthService";

const CircleIndicator = ({ isAdmin }: { isAdmin: boolean }) => {
    const circleStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: isAdmin ? 'green' : 'red', // Verde si es admin, rojo si no
        display: 'inline-block',
        marginRight: '10px',
    };

    return <div style={circleStyle}></div>;
};

const UserRoleIndicator: React.FC = () => {
    const role = getRole(); // Obtiene el rol del usuario
    const isAdmin = role === 'admin'; // Verifica si el rol es admin

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <CircleIndicator isAdmin={isAdmin} />
            {isAdmin ? <p>Eres administrador.</p> : <p>No eres administrador.</p>}
        </div>
    );
};

export default UserRoleIndicator;
