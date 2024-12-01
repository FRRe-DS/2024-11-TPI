import axios from 'axios';

// Crear una instancia de Axios con baseURL configurada
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
});

// Confirmar que la baseURL está configurada correctamente
console.log('Base URL configurada:', api.defaults.baseURL);

// Interceptor para agregar el token a las solicitudes
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        // Verificar si el token está en localStorage
        if (token) {
            // Si el token está presente, configurarlo en los encabezados
            config.headers.Authorization = `Bearer ${token}`;
            console.log('Encabezado Authorization configurado:', config.headers.Authorization);
        } else {
            console.warn('No se encontró token en localStorage');
        }

        // Verificar los detalles completos de la solicitud antes de enviarla
        console.log('Configuración de solicitud antes de enviarla:', config);
        return config;
    },
    (error) => {
        console.error('Error en interceptor de solicitud:', error);
        return Promise.reject(error);
    }
);

// Interceptor para manejar la respuesta
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            // El servidor respondió con un código fuera del rango 2xx
            console.error('Error en la respuesta de la API:');
            console.error(`- Código de estado: ${error.response.status}`);
            console.error(`- Mensaje: ${error.response.statusText}`);
            console.error(`- Detalles:`, error.response.data);
        } else if (error.request) {
            // La solicitud se hizo pero no hubo respuesta
            console.error('El servidor no respondió. Detalles de la solicitud:', error.request);
        } else {
            // Algo pasó al configurar la solicitud
            console.error('Error al configurar la solicitud:', error.message);
        }

        return Promise.reject(error);
    }
);

// Interceptor para manejar errores generales de la API (puedes combinar con el anterior)
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('Error inesperado al recibir la respuesta:', error);
        return Promise.reject(error);
    }
);

export default api;
