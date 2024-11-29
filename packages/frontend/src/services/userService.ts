import api from './axiosConfig';
import { User } from '../features/user/types/userTypes';

export const getCurrentUser = async (): Promise<User | null> => {
    try {
        const response = await api.get('/users'); // Verifica si esta ruta es para obtener el usuario actual
        return response.data;
    } catch (error) {
        console.error('Error al obtener el usuario actual:', error);
        return null;
    }
};

export const fetchUsers = async () => {
    try {
        const response = await api.get('/users');
        return response.data.users; // Asegúrate de acceder a la propiedad 'users' de la respuesta
    } catch (error) {
        console.error("Error en la carga de usuarios:", error);
        throw error;
    }
};

export const updateUserRole = async (userId: string, newRole: string) => {
    try {
        const response = await api.put(`/roles/${userId}`, { role: newRole }); // Ruta modularizada para roles
        return response.data;
    } catch (error) {
        console.error("Error en updateUserRole:", error);
        throw error;
    }
};

export const logout = async (): Promise<void> => {
    try {
        await api.post('/auth/logout'); // Confirma la ruta correcta en el backend
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
        throw error;
    }
};