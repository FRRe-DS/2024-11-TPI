import React, { useState, useEffect } from 'react';
import { getEventos, createEvento, deleteEvento } from '../services/EventService';

const AdminEvents: React.FC = () => {
    const [eventos, setEventos] = useState<any[]>([]);
    const [newEvent, setNewEvent] = useState('');

    useEffect(() => {
        const fetchEventos = async () => {
            const data = await getEventos();
            setEventos(data);
        };
        fetchEventos();
    }, []);

    const handleCreateEvent = async () => {
        if (newEvent) {
            await createEvento({ name: newEvent });
            setNewEvent('');
            const data = await getEventos();
            setEventos(data); // Refresca la lista de eventos
        }
    };

    const handleDeleteEvent = async (id: string) => {
        await deleteEvento(id);
        const data = await getEventos();
        setEventos(data); // Refresca la lista de eventos
    };

    return (
        <div>
            <h1>Gestión de Eventos</h1>
            <input
                type="text"
                value={newEvent}
                onChange={(e) => setNewEvent(e.target.value)}
                placeholder="Nuevo Evento"
            />
            <button onClick={handleCreateEvent}>Crear Evento</button>

            <ul>
                {eventos.map((evento) => (
                    <li key={evento.id}>
                        {evento.name}
                        <button onClick={() => handleDeleteEvent(evento.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminEvents;
