import axios from 'axios';
import { User } from '../types/userTypes';

const API_URL = 'http://localhost:3000/api/user';

// Suponiendo que el token se guarda en el localStorage o en el estado de tu aplicación
const getAuthToken = () => localStorage.getItem('token'); // O cualquier otro lugar donde almacenes el token

const userService = {
    getCurrentUser: async (): Promise<User | null> => {
        try {
            const token = getAuthToken();
            if (!token) {
                console.error('No token found');
                return null; // Si no hay token, no continuamos
            }

            // Configura el encabezado Authorization
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`, // Enviar el token con el prefijo 'Bearer'
                },
            };

            // Realiza la solicitud GET con el encabezado de autenticación
            const response = await axios.get(API_URL, config);
            console.log('User data:', response.data); // Asegúrate de que el objeto usuario esté aquí
            return response.data; // Retorna los datos del usuario
        } catch (error) {
            console.error('Error fetching current user:', error);
            return null; // Retorna null si hay un error
        }
    },
    logout: async (): Promise<void> => {
        await axios.post('/api/user/logout');
    },
};

export default userService;

