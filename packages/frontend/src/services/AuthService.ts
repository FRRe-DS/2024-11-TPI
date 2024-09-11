// Importa la librería axios para hacer peticiones HTTP
import axios from 'axios';

// Define la URL base para las peticiones al backend
const API_URL = 'http://localhost:3000/api/auth'; // Reemplaza con tu URL real

// Función para autenticar al usuario (login)
export const login = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username,
            password
        });
        return response.data; // Devuelve los datos del usuario autenticado
    } catch (error) {
        console.error('Error al autenticar al usuario:', error);
        throw error; // Lanza el error para ser manejado por el hook
    }
};

// Función para cerrar sesión (logout)
export const logout = async () => {
    try {
        await axios.post(`${API_URL}/logout`); // Realiza la solicitud de logout
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
        throw error;
    }
};

// Función para obtener los datos del usuario autenticado
export const getUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/user`); // Cambia la ruta según tu API
        return response.data; // Devuelve los datos del usuario actual
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        throw error;
    }
};
