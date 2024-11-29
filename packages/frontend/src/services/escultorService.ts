import api from './axiosConfig';

export const fetchEscultores = async () => {
    try {
        const response = await api.get('/escultores');
        return response.data;
    } catch (error) {
        console.error("Error en la carga de usuarios:", error);
        throw error;
    }
};


export const fetchEscultorById = async (userId: number): Promise<any> => {
    try {
        const response = await api.get(`/escultores/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener el escultor:", error);
        throw error;
    }
};

export const updateEscultor = async (escultor: any): Promise<any> => {
    try {
        // Sólo pasamos los campos que el administrador puede editar
        const { userId, biografia, imagen, instagram, facebook, youtube, linkedin } = escultor;
        const updatedEscultor = { biografia, imagen, instagram, facebook, youtube, linkedin };

        const response = await api.put(`/escultores/${userId}`, updatedEscultor); // Asegúrate de que `userId` es correcto
        return response.data;
    } catch (error) {
        console.error("Error al actualizar escultor:", error);
        throw error;
    }
};


// Eliminar escultor
export const deleteEscultor = async (id: number) => {  // Cambiar a 'number'
    try {
        console.log(`Enviando solicitud DELETE a /escultores/${id}...`);
        const response = await api.delete(`/escultores/${id}`);
        console.log('Escultor eliminado con éxito:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el escultor:', error);
        throw error;
    }
};
export const setEscultorToUser = async (userId: string, newRole: string) => {
    try {
        const response = await api.put(`/roles/${userId}`, { role: newRole }); // Ruta modularizada para roles
        return response.data;
    } catch (error) {
        console.error("Error en updateUserRole:", error);
        throw error;
    }
};

