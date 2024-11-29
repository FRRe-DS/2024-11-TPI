import React, { useState } from "react";
import UserList from "./components/UserList";
import RoleUpdateForm from "./components/RoleUpdateForm";

const UserManagement: React.FC = () => {
    const [selectedAction, setSelectedAction] = useState<string | null>(null);

    const renderContent = () => {
        switch (selectedAction) {
            case 'list':
                return <UserList />;
            case 'updateRole':
                return <RoleUpdateForm />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-8 space-y-8">
            <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-center text-4xl font-extrabold text-gray-700">Gestión de Usuarios</h2>
                <div className="flex flex-col w-full gap-6">
                    {/* Ver lista de usuarios */}
                    <button
                        onClick={() => setSelectedAction('list')}
                        className={`relative font-semibold text-white cursor-pointer border-none rounded-md w-full py-4 text-xl z-10 overflow-hidden ${
                            selectedAction === 'list'
                                ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                                : 'bg-gradient-to-r from-gray-500 to-gray-700 hover:from-purple-500 hover:to-blue-500'
                        }`}
                    >
                        Ver Lista de Usuarios
                    </button>
                    {/* Actualizar roles */}
                    <button
                        onClick={() => setSelectedAction('updateRole')}
                        className={`relative font-semibold text-white cursor-pointer border-none rounded-md w-full py-4 text-xl z-10 overflow-hidden ${
                            selectedAction === 'updateRole'
                                ? 'bg-gradient-to-r from-green-500 to-green-700'
                                : 'bg-gradient-to-r from-gray-500 to-gray-700 hover:from-green-500 hover:to-green-700'
                        }`}
                    >
                        Modificar Roles
                    </button>
                </div>
            </div>
            {renderContent()}
        </div>
    );
};

export default UserManagement;