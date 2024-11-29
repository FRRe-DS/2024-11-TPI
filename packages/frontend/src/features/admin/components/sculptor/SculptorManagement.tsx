import React from 'react';
import CreateSculptor from "./components/SculptorForm";
import DeleteSculptor from "./components/SculptorDelete";
import SculptorListAdmin from "./components/SculptorListAdmin";

const SculptorManagement: React.FC = () => {
    const [selectedAction, setSelectedAction] = React.useState<string | null>(null);

    const renderContent = () => {
        switch (selectedAction) {
            case 'create':
                return <CreateSculptor />;
            case 'list':
                return <SculptorListAdmin />;
            case 'delete':
                return <DeleteSculptor />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-8 space-y-8">
            <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-center text-4xl font-extrabold text-gray-700">Gestión de Escultores</h2>
                <div className="flex flex-col w-full gap-6">
                    <button
                        onClick={() => setSelectedAction('create')}
                        className={`font-semibold text-white cursor-pointer rounded-md w-full py-4 text-xl ${
                            selectedAction === 'create'
                                ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                                : 'bg-gray-700 hover:from-purple-500 hover:to-blue-500'
                        }`}
                    >
                        Ingresar Escultor
                    </button>
                    <button
                        onClick={() => setSelectedAction('list')}
                        className={`font-semibold text-white cursor-pointer rounded-md w-full py-4 text-xl ${
                            selectedAction === 'list'
                                ? 'bg-gradient-to-r from-green-500 to-green-700'
                                : 'bg-gray-700 hover:from-green-500 hover:to-green-700'
                        }`}
                    >
                        Ver Lista de Escultores
                    </button>
                    <button
                        onClick={() => setSelectedAction('delete')}
                        className={`font-semibold text-white cursor-pointer rounded-md w-full py-4 text-xl ${
                            selectedAction === 'delete'
                                ? 'bg-gradient-to-r from-red-500 to-red-700'
                                : 'bg-gray-700 hover:from-red-500 hover:to-red-700'
                        }`}
                    >
                        Eliminar Escultor
                    </button>
                </div>
            </div>
            {renderContent()}
        </div>
    );
};

export default SculptorManagement;