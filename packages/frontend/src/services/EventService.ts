// Importa la librería axios para hacer peticiones HTTP
import axios from 'axios';

// Define la URL base para las peticiones al backend
const API_URL = 'http://localhost:3000/api/events'; // Reemplaza con tu URL real

/**
 * Obtiene una lista de eventos desde el backend.
 * @returns Una promesa que resuelve con la lista de eventos.
 */
export const fetchEvents = async () => {
    try {
        // Realiza una solicitud GET a la API para obtener eventos
        const response = await axios.get(API_URL);
        return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
        console.error('Error al obtener eventos:', error); // Manejo de errores
        throw error; // Lanza el error para que pueda ser manejado por el componente
    }
};

/**
 * Obtiene un evento específico por ID.
 * @param id - El ID del evento a obtener.
 * @returns Una promesa que resuelve con el evento solicitado.
 */
export const fetchEventById = async (id: string) => {
    try {
        // Realiza una solicitud GET a la API para obtener un evento específico
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data; // Devuelve los datos del evento
    } catch (error) {
        console.error('Error al obtener el evento:', error); // Manejo de errores
        throw error; // Lanza el error para que pueda ser manejado por el componente
    }
};
