import React from 'react';
import EventList from "../../events/components/EventList.tsx";
import CreateEvent from "../../events/components/EventForm.tsx";
import DeleteEvent from "../../events/components/EventDelete.tsx";

type ButtonProps = {
    label: string;
    onClick: () => void;
    bgColor: string;
};

const ActionButton: React.FC<ButtonProps> = ({ label, onClick, bgColor }) => (
    <button
        onClick={onClick}
        className={`${bgColor} w-full py-2 hover:bg-opacity-80 text-white rounded-md`}
    >
        {label}
    </button>
);

const EventManagement: React.FC = () => {
    const [selectedAction, setSelectedAction] = React.useState<string | null>(null);

    const renderContent = () => {
        switch (selectedAction) {
            case 'create':
                return <CreateEvent />;
            case 'list':
                return <EventList />;
            case 'delete':
                return <DeleteEvent />;
            default:
                return null;
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div className="max-w-md w-full bg-white rounded-md shadow-xl overflow-hidden p-8 space-y-8">
                <h2 className="text-center text-4xl font-extrabold text-gray-700">Gestión de Eventos</h2>
                <div className="flex flex-col gap-4">
                    <ActionButton
                        label="Crear Evento"
                        onClick={() => setSelectedAction('create')}
                        bgColor="bg-blue-500"
                    />
                    <ActionButton
                        label="Ver Lista de Eventos"
                        onClick={() => setSelectedAction('list')}
                        bgColor="bg-green-500"
                    />
                    <ActionButton
                        label="Eliminar Evento"
                        onClick={() => setSelectedAction('delete')}
                        bgColor="bg-red-500"
                    />
                </div>
                {renderContent()}
            </div>
        </div>
    );
};

export default EventManagement;
