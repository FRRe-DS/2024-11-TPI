import api from './axiosConfig';

export const getEscultores = async () => {
    try {
        const response = await api.get('/escultores');
        return response.data.escultores;
    } catch (error) {
        console.error('Error en el servicio getEscultores:', error);
        throw error;
    }
};

export const createEscultor = async (escultorData: any) => {
    try {
        const response = await api.post('/escultores', escultorData);
        return response.data;
    } catch (error) {
        console.error('Error al crear el escultor:', error);
        throw error;
    }
};

export const updateEscultor = async (id: string, escultorData: any) => {
    try {
        const response = await api.put(`/escultores/${id}`, escultorData);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el escultor:', error);
        throw error;
    }
};

export const deleteEscultor = async (id: string) => {
    try {
        const response = await api.delete(`/escultores/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el escultor:', error);
        throw error;
    }
};