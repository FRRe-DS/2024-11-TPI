import axios from 'axios';

const API_URL = 'http://localhost:3000/sponsors';

// Obtener todos los sponsors
export const getSponsors = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los sponsors:', error);
        throw error;
    }
};

// Crear un nuevo sponsor
export const createSponsor = async (sponsorData: { name: string }) => {
    try {
        await axios.post(API_URL, sponsorData);
        return 'Sponsor creado con éxito';
    } catch (error) {
        console.error('Error al crear el sponsor:', error);
        throw error;
    }
};

// Actualizar un sponsor existente
export const updateSponsor = async (id: string, sponsorData: { nombre: string }) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, sponsorData);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el sponsor:', error);
        throw error;
    }
};

// Eliminar un sponsor
export const deleteSponsor = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el sponsor:', error);
        throw error;
    }
};

