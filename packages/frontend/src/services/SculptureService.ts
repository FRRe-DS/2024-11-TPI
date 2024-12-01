import api from './axiosConfig';

// Obtener todas las esculturas
export const getEsculturas = async () => {
    const response = await api.get('/esculturas');
    return response.data.esculturas; // Extraemos el arreglo de esculturas
};

// Obtener esculturas filtradas por evento
export const getEsculturasByEvent = async (eventoID: string) => {
    if (!eventoID) throw new Error('Evento ID no proporcionado');
    const response = await api.get(`/eventos/${eventoID}/esculturas`); // Supone que las esculturas por evento están en esta ruta
    return response.data.esculturas;
};

// Crear una nueva escultura
export const createEscultura = async (data: any) => {
    const response = await api.post('/esculturas', data);
    return response.data.escultura; // Retorna la escultura recién creada
};

// Obtener una escultura por ID
export const getEsculturaById = async (id: string) => {
    const response = await api.get(`/esculturas/${id}`);
    return response.data.escultura; // Extraemos la escultura específica
};

// Actualizar una escultura existente
export const updateEscultura = async (id: string, esculturaData: any) => {
    const response = await api.put(`/esculturas/${id}`, esculturaData);
    return response.data.escultura; // Retorna la escultura actualizada
};

// Eliminar una escultura
export const deleteEscultura = async (id: string) => {
    const response = await api.delete(`/esculturas/${id}`);
    return response.data.message; // Retorna el mensaje de éxito
};
