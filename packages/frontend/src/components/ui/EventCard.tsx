import React from 'react';

interface EventCardProps {
    title: string; // Título del evento
    date: string; // Fecha del evento
    description: string; // Descripción del evento
}

/**
 * Componente específico del dominio para mostrar un evento.
 * Encapsula la lógica y presentación de un evento, siguiendo SRP.
 */
const EventCard: React.FC<EventCardProps> = ({ title, date, description }) => {
    return (
        <div className="event-card"> {/* Clase CSS para estilo */}
            <h2>{title}</h2> {/* Título del evento */}
            <p>{date}</p> {/* Fecha del evento */}
            <p>{description}</p> {/* Descripción del evento */}
        </div>
    );
};

export default EventCard; // Exporta el componente para su uso en otros componentes
