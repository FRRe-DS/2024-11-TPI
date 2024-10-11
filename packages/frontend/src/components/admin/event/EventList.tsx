interface Event {
    id: string;
    title: string;
    date: string;
    place: string;
    description: string;
    theme: string;
}

interface EventListProps {
    eventos: Event[];
    onDelete: (id: string) => void;
}

const EventList: React.FC<EventListProps> = ({ eventos, onDelete }) => {
    return (
        <ul className="space-y-4">
            {eventos.map((evento) => (
                <li key={evento.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
                    <span>{evento.title}</span>
                    <button
                        onClick={() => onDelete(evento.id)}
                        className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600">
                        Eliminar
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default EventList;
