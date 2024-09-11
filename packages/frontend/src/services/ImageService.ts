// Importa la librería axios para hacer peticiones HTTP
import axios from 'axios';

// Define la URL base para las peticiones al backend
const API_URL = 'http://localhost:3000/api/images'; // Reemplaza con tu URL real

/**
 * Obtiene una lista de imágenes asociadas a un evento o escultura.
 * @param itemId - El ID del evento o escultura.
 * @returns Una promesa que resuelve con la lista de imágenes.
 */
export const fetchImagesByItemId = async (itemId: string) => {
    try {
        // Realiza una solicitud GET a la API para obtener imágenes asociadas
        const response = await axios.get(`${API_URL}/${itemId}`);
        return response.data; // Devuelve los datos de las imágenes
    } catch (error) {
        console.error('Error al obtener imágenes:', error); // Manejo de errores
        throw error; // Lanza el error para que pueda ser manejado por el componente
    }
};

/**
 * Sube una nueva imagen al backend.
 * @param formData - Los datos del formulario con la imagen a subir.
 * @returns Una promesa que resuelve con los datos de la imagen subida.
 */
export const uploadImage = async (formData: FormData) => {
    try {
        // Realiza una solicitud POST a la API para subir una nueva imagen
        const response = await axios.post(`${API_URL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data; // Devuelve los datos de la imagen subida
    } catch (error) {
        console.error('Error al subir imagen:', error); // Manejo de errores
        throw error; // Lanza el error para que pueda ser manejado por el componente
    }
};
