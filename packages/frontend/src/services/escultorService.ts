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

export const createUserAndEscultor = async (userData: any, escultorData: any) => {
    try {
        // Crear el usuario
        const userResponse = await api.post('/users', userData);  // El token se enviará automáticamente

        // Crear el escultor asociado con el usuario recién creado
        const escultorResponse = await api.post('/escultores', {
            ...escultorData,
            userId: userResponse.data.id,
        });

        return escultorResponse.data;
    } catch (error) {
        console.error('Error al crear el usuario y escultor:', error);
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