import api from './axiosConfig';

export const getEventos = async () => {
    const response = await api.get('/eventos');
    return response.data.eventos;
};

export const getEventoById = async (id: string) => {
    const response = await api.get(`/eventos/${id}`);
    return response.data.eventos;
};

export const createEvento = async (eventoData: any) => {
    const response = await api.post('/eventos', eventoData);
    return response.data;
};

export const updateEvento = async (id: string, eventoData: any) => {
    const response = await api.put(`/eventos/${id}`, eventoData);
    return response.data.eventos;
};

export const deleteEvento = async (id: string) => {
    const response = await api.delete(`/eventos/${id}`);
    return response.data.eventos;
};