import React, { useState, useEffect } from 'react';
import EventForm from '../event/EventForm.tsx';
import EventList from '../event/EventList.tsx';
import { getEventos, createEvento, deleteEvento } from '../../../services/EventService.ts';

const EventManagement: React.FC = () => {
    const [eventos, setEventos] = useState<any[]>([]);

    useEffect(() => {
        const fetchEventos = async () => {
            const data = await getEventos();
            setEventos(data);
        };
        fetchEventos();
    }, []);

    const handleCreateEvent = async (newEvent: any) => {
        await createEvento(newEvent);
        const updatedEventos = await getEventos();
        setEventos(updatedEventos);  // Actualiza la lista de eventos
    };

    const handleDeleteEvent = async (id: string) => {
        await deleteEvento(id);
        const updatedEventos = await getEventos();
        setEventos(updatedEventos);  // Actualiza la lista de eventos
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Manage Events</h2>
            <EventForm onCreate={handleCreateEvent} />
            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Current Events</h3>
                <EventList eventos={eventos} onDelete={handleDeleteEvent} />
            </div>
        </div>
    );
};

export default EventManagement;
