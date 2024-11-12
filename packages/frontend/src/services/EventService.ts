import axios from 'axios';

const API_URL = 'http://localhost:3000/eventos';

// Obtener todos los eventos
export const getEventos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Los datos de los eventos que devuelve el backend
    } catch (error) {
        console.error('Error al obtener los eventos:', error);
        throw error;
    }
};
// Cambia la URL del API para incluir el ID en la ruta
export const getEvento = async (id: string) => {
    try {
        // Realiza una solicitud GET a /eventos/{id}
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data; // Devuelve los datos del evento específico
    } catch (error) {
        console.error('Error al obtener el evento:', error);
        throw error;
    }
};


// Crear un nuevo evento
export const createEvento = async (eventoData: any) => {
    try {
        await axios.post(API_URL, eventoData);
        return 'Evento creado con éxito'; // El nuevo evento creado
    } catch (error) {
        console.error('Error al crear el evento:', error);
        throw error;
    }
};

// Actualizar un evento existente
export const updateEvento = async (id: string, eventoData: any) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, eventoData);
        return response.data; // El evento actualizado
    } catch (error) {
        console.error('Error al actualizar el evento:', error);
        throw error;
    }
};

// Eliminar un evento
export const deleteEvento = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data; // Confirmación de la eliminación
    } catch (error) {
        console.error('Error al eliminar el evento:', error);
        throw error;
    }
};


