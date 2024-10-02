import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

const tokenService = {
    setToken: (token: string) => localStorage.setItem('token', token),
    getToken: () => localStorage.getItem('token'),
    removeToken: () => localStorage.removeItem('token'),
};

// Almacenar el token y el rol en localStorage
const setAuthData = (token: string, role: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
};

// Obtener el rol del usuario del localStorage
export const getRole = () => {
    return localStorage.getItem('role');
};



// Función para autenticar al usuario (login)
export const login = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        const { token, user } = response.data;

        tokenService.setToken(token); // Guarda el token
        setAuthData(token, user.role); // Almacena el rol junto con el token

        return user; // Retorna los datos del usuario autenticado
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error al autenticar al usuario:', error.message);
        } else {
            console.error('Error inesperado:', error);
        }
        return null; // Devolvemos null en caso de error
    }
};

// Función para cerrar sesión (logout)
export const logout = () => {
    tokenService.removeToken(); // Elimina el token del almacenamiento local
    localStorage.removeItem('role'); // También eliminamos el rol
};

// Función para obtener los datos del usuario autenticado
export const getUser = async () => {
    try {
        const token = tokenService.getToken();
        if (!token) {
            throw new Error('No hay token de autenticación');
        }

        const response = await axios.get(`${API_URL}/user`, {
            headers: { Authorization: `Bearer ${token}` }, // Envía el token en la cabecera
        });
        return response.data; // Devuelve los datos del usuario actual
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 401) {
                tokenService.removeToken();
                localStorage.removeItem('role'); // Limpiar el rol también
                throw new Error('Token inválido o expirado. Por favor, inicia sesión nuevamente.');
            }
            console.error('Error al obtener los datos del usuario:', error.message);
        } else {
            console.error('Error inesperado al obtener los datos del usuario:', error);
        }
        return null; // Devolvemos null en lugar de lanzar el error
    }
};

// Verificar si hay un token válido
export const isAuthenticated = () => {
    const token = tokenService.getToken();
    return !!token; // Devuelve true si hay token, false si no
};
