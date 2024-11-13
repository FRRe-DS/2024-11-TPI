import React from 'react';
import SculptureList from '../../sculptures/components/SculptureList';
import CreateSculpture from '../../sculptures/components/SculptureForm.tsx';
import DeleteSculpture from '../../sculptures/components/ScultureDelete.tsx';

const SculptureManagement: React.FC = () => {
    const [selectedAction, setSelectedAction] = React.useState<string | null>(null);

    const renderContent = () => {
        switch (selectedAction) {
            case 'create':
                return <CreateSculpture />;
            case 'list':
                return <SculptureList />;
            case 'delete':
                return <DeleteSculpture />;
            default:
                return null;
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
                <h2 className="text-2xl text-sky-900 font-bold mb-6">Gestión de Esculturas</h2>
                <div className="flex flex-col gap-4">
                    {/* Crear Escultura Button */}
                    <button
                        onClick={() => setSelectedAction('create')}
                        className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                    >
                        Crear Escultura
                    </button>
                    {/* Ver Lista de Esculturas Button */}
                    <button
                        onClick={() => setSelectedAction('list')}
                        className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
                    >
                        Ver Lista de Esculturas
                    </button>
                    {/* Eliminar Escultura Button */}
                    <button
                        onClick={() => setSelectedAction('delete')}
                        className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
                    >
                        Eliminar Escultura
                    </button>
                </div>
                {renderContent()}
            </div>
        </div>
    );
};

export default SculptureManagement;
