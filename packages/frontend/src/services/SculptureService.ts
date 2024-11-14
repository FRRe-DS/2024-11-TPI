import axios from 'axios';

const API_URL = 'http://localhost:3000/esculturas';

// Obtener todos los escultores
export const getEsculturas = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener las esculturas:', error);
        throw error;
    }
};

export const getEsculturasbyEvent = async (eventoID: any) => {
    try {
        // Verificar si el eventoID está definido antes de hacer la solicitud
        if (!eventoID) {
            throw new Error('Evento ID no proporcionado');
        }

        // Realizamos la solicitud con el eventoID
        const response = await axios.get(`${API_URL}/${eventoID}`);

        // Retornamos la data de la respuesta
        return response.data;
    } catch (error: any) {
        console.error('Error al obtener las esculturas:', error.message || error);
        throw error;  // Lanzar error para ser manejado en el lugar que llama a esta función
    }
};


// Crear un nuevo escultor
export const createEscultura = async (esculturaData: any) => {
    try {
        await axios.post(API_URL, esculturaData);
        return 'Escultura creada con éxito';
    } catch (error) {
        console.error('Error al crear el escultura:', error);
        throw error;
    }
};

// Actualizar un escultor existente
export const updateEsculturas = async (id: string, esculturaData: any) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, esculturaData);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar la escultura:', error);
        throw error;
    }
};

// Eliminar un escultor
export const deleteEsculture = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el escultor:', error);
        throw error;
    }
};
