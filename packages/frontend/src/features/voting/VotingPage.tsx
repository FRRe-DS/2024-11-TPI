import Navbar from "../../layout/Navbar/Navbar.tsx";
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Event {
    id: number;
    title: string;
    description: string;
}

const eventsData: Event[] = [
    { id: 1, title: 'Evento 1', description: 'Descripción del Evento 1' },
    { id: 2, title: 'Evento 2', description: 'Descripción del Evento 2' },
    { id: 3, title: 'Evento 3', description: 'Descripción del Evento 3' },
];

// Componente para listar eventos
const EventsList: React.FC = () => {
    const navigate = useNavigate();
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const handleClick = (id: number) => {
        setExpandedId(id === expandedId ? null : id); // Expande o contrae el elemento seleccionado
        navigate(`/events/${id}`); // Cambia la URL sin recargar la página
    };

    return (
        <div>
            {eventsData.map((event) => (
                <div key={event.id}>
                    <h2 onClick={() => handleClick(event.id)}>{event.title}</h2>
                    {expandedId === event.id && <p>{event.description}</p>}
                </div>
            ))}
        </div>
    );
};

// Componente para mostrar el evento expandido según el URL
const EventDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const event = eventsData.find((event) => event.id === Number(id));

    if (!event) return <p>Evento no encontrado</p>;

    return (
        <div>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
        </div>
    );
};

const VotingPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <Navbar />
            {id ? <EventDetail /> : <EventsList />}
        </div>
    );
};

export default VotingPage;
