import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

// Almacenar el token en el localStorage
const setToken = (token: string) => {
    localStorage.setItem('token', token);
};

// Obtener el token del localStorage
const getToken = () => {
    return localStorage.getItem('token');
};

// Función para autenticar al usuario (login)
export const login = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        const { token, user } = response.data;
        setToken(token); // Guarda el token
        return user; // Retorna los datos del usuario autenticado
    } catch (error) {
        console.error('Error al autenticar al usuario:', error);
        throw error;
    }
};

// Función para cerrar sesión (logout)
export const logout = () => {
    localStorage.removeItem('token'); // Elimina el token del almacenamiento local
};

// Función para obtener los datos del usuario autenticado
export const getUser = async () => {
    try {
        const token = getToken();
        if (!token) {
            throw new Error('No hay token de autenticación');
        }

        const response = await axios.get(`${API_URL}/user`, {
            headers: { Authorization: `Bearer ${token}` } // Envía el token en la cabecera
        });
        return response.data; // Devuelve los datos del usuario actual
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        throw error;
    }
};
