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
        const token = localStorage.getItem("token");

        // Verificar si el token está en localStorage

        if (token) {
            // Si el token está presente, configurarlo en los encabezados
            config.headers.Authorization = `Bearer ${token}`;
            console.log('Encabezado Authorization configurado:', config.headers.Authorization);
        } else {
            console.log('No se encontró token en localStorage');
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
        // Verificar la respuesta del servidor
        return response;
    },
    (error) => {
        // Capturar cualquier error en la respuesta
        console.error('Error en la respuesta de la API:', error.response ? error.response : error);
        return Promise.reject(error);
    }
);

// Interceptor para manejar errores generales de la API
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('Error al recibir la respuesta:', error);
        return Promise.reject(error);
    }
);

export default api;