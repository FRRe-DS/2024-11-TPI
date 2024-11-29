import api from './axiosConfig';
import { tokenService } from './tokenService';

const decodeToken = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
            .join('')
    );
    return JSON.parse(jsonPayload);
};

// Autenticación del usuario (Login)
export const login = async (username: string, password: string) => {
    try {
        const response = await api.post('/auth/login', { username, password });
        console.log('Respuesta completa del backend:', response); // Agrega este log
        const { token, user } = response.data; // Asegúrate de que estas propiedades existan
        console.log('Datos procesados:', { token, user }); // Imprime los datos procesados

        tokenService.setToken(token);
        tokenService.setRole(user.role);

        return user;
    } catch (error) {
        console.error('Error al autenticar al usuario:', error);
        throw error;
    }
};

// Cerrar sesión (Logout)
export const logout = () => {
    tokenService.removeToken();
    tokenService.removeRole();
    tokenService.removeUser();
    console.log('Sesión cerrada, token, rol y usuario eliminados');
};

// Obtener datos del usuario actual
export const getUser = async () => {
    try {
        const token = tokenService.getToken();
        if (!token) throw new Error("No hay token de autenticación");

        // Decodificar el token para obtener el userId
        const decodedToken = decodeToken(token);
        const userId = decodedToken.id; // Asegúrate de que el token tenga el campo `id`

        const response = await api.get(`/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        console.log("Usuario obtenido:", response.data);
        return response.data.user;
    } catch (error: any) {
        console.error("Error al obtener los datos del usuario:", error.response || error.message);
        return null;
    }
};

// Verificar si el usuario está autenticado
export const isAuthenticated = () => {
    const token = tokenService.getToken();
    return !!token; // Devuelve true si hay un token
};

// Obtener el rol del usuario actual
export const getRole = () => tokenService.getRole();