import React from 'react';
import SculptorList from '../../sculptors/components/SculptorList';
import CreateSculptor from '../../sculptors/components/SculptorForm.tsx';
import DeleteSculptor from '../../sculptors/components/ScultorDelete.tsx';

const SculptorManagement: React.FC = () => {
    const [selectedAction, setSelectedAction] = React.useState<string | null>(null);

    const renderContent = () => {
        switch (selectedAction) {
            case 'create':
                return <CreateSculptor />;
            case 'list':
                return <SculptorList />;
            case 'delete':
                return <DeleteSculptor />;
            default:
                return null;
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div className="max-w-md w-full bg-gradient-to-r from-purple-400 to-blue-600 rounded-md shadow-xl overflow-hidden p-8 space-y-8">
                <h2 className="text-center text-4xl font-extrabold text-white">Gestión de Escultores</h2>
                <div className="flex flex-col gap-6 items-center"> {/* Ajuste para centrar los botones */}
                    {/* Crear Escultor Button */}
                    <button
                        onClick={() => setSelectedAction('create')}
                        className={`relative font-semibold text-white cursor-pointer border-none rounded-full w-36 h-14 z-10 overflow-hidden
                            ${selectedAction === 'create' ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-gray-500 to-gray-700 hover:from-purple-500 hover:to-blue-500'}`}
                    >
                        <span className="absolute inset-0 flex items-center justify-center text-lg z-10 backdrop-blur-lg">
                            Crear Escultor
                        </span>
                        {/* Blobs de fondo */}
                        <span className="blob absolute top-0 left-0 w-20 h-12 rounded-full bg-orange-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                        <span className="blob absolute top-0 left-7 w-20 h-12 rounded-full bg-purple-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                        <span className="blob absolute top-[-1em] left-16 w-20 h-12 rounded-full bg-pink-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                        <span className="blob absolute top-6 left-20 w-20 h-12 rounded-full bg-blue-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                    </button>

                    {/* Ver Lista de Escultores Button */}
                    <button
                        onClick={() => setSelectedAction('list')}
                        className={`relative font-semibold text-white cursor-pointer border-none rounded-full w-36 h-14 z-10 overflow-hidden
                            ${selectedAction === 'list' ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-gray-500 to-gray-700 hover:from-purple-500 hover:to-blue-500'}`}
                    >
                        <span className="absolute inset-0 flex items-center justify-center text-lg z-10 backdrop-blur-lg">
                            Ver Lista de Escultores
                        </span>
                        {/* Blobs de fondo */}
                        <span className="blob absolute top-0 left-0 w-20 h-12 rounded-full bg-orange-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                        <span className="blob absolute top-0 left-7 w-20 h-12 rounded-full bg-purple-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                        <span className="blob absolute top-[-1em] left-16 w-20 h-12 rounded-full bg-pink-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                        <span className="blob absolute top-6 left-20 w-20 h-12 rounded-full bg-blue-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                    </button>

                    {/* Eliminar Escultor Button */}
                    <button
                        onClick={() => setSelectedAction('delete')}
                        className={`relative font-semibold text-white cursor-pointer border-none rounded-full w-36 h-14 z-10 overflow-hidden
                            ${selectedAction === 'delete' ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-gray-500 to-gray-700 hover:from-purple-500 hover:to-blue-500'}`}
                    >
                        <span className="absolute inset-0 flex items-center justify-center text-lg z-10 backdrop-blur-lg">
                            Eliminar Escultor
                        </span>
                        {/* Blobs de fondo */}
                        <span className="blob absolute top-0 left-0 w-20 h-12 rounded-full bg-orange-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                        <span className="blob absolute top-0 left-7 w-20 h-12 rounded-full bg-purple-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                        <span className="blob absolute top-[-1em] left-16 w-20 h-12 rounded-full bg-pink-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                        <span className="blob absolute top-6 left-20 w-20 h-12 rounded-full bg-blue-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                    </button>
                </div>
                {renderContent()}
            </div>
        </div>
    );
};

export default SculptorManagement;
