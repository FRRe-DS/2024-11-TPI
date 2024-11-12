import React from 'react';

interface EventCardProps {
    nombre: string; // Título del evento
    fecha: string; // Fecha del evento
    descripcion: string; // Descripción del evento
}

/**
 * Componente específico del dominio para mostrar un evento.
 * Encapsula la lógica y presentación de un evento, siguiendo SRP.
 */
const EventCard: React.FC<EventCardProps> = ({ nombre, fecha, descripcion }) => {
    return (
        <div className="event-card"> {/* Clase CSS para estilo */}
            <h2>{nombre}</h2> {/* Título del evento */}
            <p>{fecha}</p> {/* Fecha del evento */}
            <p>{descripcion}</p> {/* Descripción del evento */}
        </div>
    );
};

export default EventCard; // Exporta el componente para su uso en otros componentes
