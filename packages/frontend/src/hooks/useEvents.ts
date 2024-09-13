import { useState, useEffect } from 'react';
import { getEventos } from '../services/EventService'; // Importa la función del servicio

/**
 * Hook personalizado para manejar la lógica de obtención de eventos.
 * Utiliza estado y efectos para cargar eventos y manejar el estado de carga.
 *
 * @returns {Object} - Un objeto con eventos, estado de carga y error.
 */
const useEvents = () => {
    const [events, setEvents] = useState<Event[]>([]); // Estado para almacenar eventos
    const [loading, setLoading] = useState<boolean>(true); // Estado para manejo de carga
    const [error, setError] = useState<string | null>(null); // Estado para manejo de errores

    // Efecto para cargar eventos al montar el hook
    useEffect(() => {
        const loadEvents = async () => {
            try {
                const fetchedEvents = await getEventos(); // Llama al servicio para obtener eventos
                setEvents(fetchedEvents); // Actualiza el estado con eventos
            } catch (err) {
                setError('Error al cargar eventos'); // Maneja errores
            } finally {
                setLoading(false); // Actualiza el estado de carga
            }
        };
        loadEvents(); // Ejecuta la función para cargar eventos
    }, []); // Dependencias vacías para que solo se ejecute una vez al montar

    return { events, loading, error }; // Devuelve el estado de eventos, carga y error
};

export default useEvents; // Exporta el hook para su uso en otros componentes
