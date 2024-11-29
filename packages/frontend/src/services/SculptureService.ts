import api from './axiosConfig';

export const getEsculturas = async () => {
    const response = await api.get('/esculturas');
    return response.data;
};

export const getEsculturasByEvent = async (eventoID: any) => {
    if (!eventoID) throw new Error('Evento ID no proporcionado');
    const response = await api.get(`/esculturas/${eventoID}`);
    return response.data;
};

export const createEscultura = async (data: any) => {
    const response = await api.post('/esculturas', data);
    return response.data;
};

export const updateEscultura = async (id: string, esculturaData: any) => {
    const response = await api.put(`/esculturas/${id}`, esculturaData);
    return response.data;
};

export const deleteEscultura = async (id: string) => {
    const response = await api.delete(`/esculturas/${id}`);
    return response.data;
};