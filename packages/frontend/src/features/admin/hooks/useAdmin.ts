// src/features/admin/hooks/useAdmin.ts
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Event {
    id: string;
    name: string;
    date: string;
    // Otras propiedades del evento
}

interface Sponsor {
    id: string;
    name: string;
    // Otras propiedades del patrocinador
}

const useAdmin = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [sponsors, setSponsors] = useState<Sponsor[]>([]);
    const [loadingEvents, setLoadingEvents] = useState(true);
    const [loadingSponsors, setLoadingSponsors] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Cargar eventos y patrocinadores al montar el componente
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('/api/events'); // Endpoint para eventos
                setEvents(response.data);
            } catch (error) {
                setError('Error al cargar eventos');
            } finally {
                setLoadingEvents(false);
            }
        };

        const fetchSponsors = async () => {
            try {
                const response = await axios.get('/api/sponsors'); // Endpoint para patrocinadores
                setSponsors(response.data);
            } catch (error) {
                setError('Error al cargar patrocinadores');
            } finally {
                setLoadingSponsors(false);
            }
        };

        fetchEvents();
        fetchSponsors();
    }, []);

    const addEvent = async (eventData: Event) => {
        try {
            const response = await axios.post('/api/events', eventData);
            setEvents((prevEvents) => [...prevEvents, response.data]);
        } catch (error) {
            setError('Error al agregar evento');
        }
    };

    const updateEvent = async (eventId: string, eventData: Event) => {
        try {
            await axios.put(`/api/events/${eventId}`, eventData);
            setEvents((prevEvents) =>
                prevEvents.map((event) => (event.id === eventId ? { ...event, ...eventData } : event))
            );
        } catch (error) {
            setError('Error al actualizar evento');
        }
    };

    const deleteEvent = async (eventId: string) => {
        try {
            await axios.delete(`/api/events/${eventId}`);
            setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
        } catch (error) {
            setError('Error al eliminar evento');
        }
    };

    // Repite para patrocinadores

    return {
        events,
        sponsors,
        loadingEvents,
        loadingSponsors,
        error,
        addEvent,
        updateEvent,
        deleteEvent,
        // Métodos para patrocinadores
    };
};

export default useAdmin;