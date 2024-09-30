import React from 'react';
import { useEventContext } from '../context/EventContext';

// Define una interfaz para el tipo de Evento
interface Evento {
    id: string;
    name: string;
}

const Events: React.FC = () => {
    const { eventos } = useEventContext();

    return (
        <div>
            <h1>Eventos Públicos</h1>
            <ul>
                {eventos.map((evento: Evento) => (
                    <li key={evento.id}>{evento.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Events;