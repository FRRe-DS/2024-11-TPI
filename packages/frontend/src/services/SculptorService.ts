import axios from 'axios';

const API_URL = 'http://localhost:3000/escultores';

// Obtener todos los escultores
export const getEscultores = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los escultores:', error);
        throw error;
    }
};

// Crear un nuevo escultor
export const createEscultor = async (escultorData: any) => {
    try {
        const response = await axios.post(API_URL, escultorData);
        return response.data;
    } catch (error) {
        console.error('Error al crear el escultor:', error);
        throw error;
    }
};

// Actualizar un escultor existente
export const updateEscultor = async (id: string, escultorData: any) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, escultorData);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el escultor:', error);
        throw error;
    }
};

// Eliminar un escultor
export const deleteEscultor = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el escultor:', error);
        throw error;
    }
};
