import axios from 'axios';

const API_URL = 'http://localhost:3000/votar';

// Función para obtener el token de autenticación
const getAuthToken = () => localStorage.getItem('token'); // Cambia según donde almacenes el token

// Registrar un voto
export const registerVote = async (esculturaId: number, voto: string, eventoId?: number) => {
    try {
        const token = getAuthToken();
        if (!token) {
            console.error('No se encontró el token');
            return null; // Si no hay token, termina la función
        }

        // Configuración del encabezado Authorization
        const config = {
            headers: {
                Authorization: `Bearer ${token}`, // Enviar el token con el prefijo 'Bearer'
            },
        };

        // Realiza la solicitud POST con el encabezado de autenticación
        const response = await axios.post(
            `${API_URL}/${eventoId}/${esculturaId}`,
            { voto },
            config
        );

        return response.data;
    } catch (error) {
        console.error('Error al registrar el voto:', error);
        throw error;
    }
};
