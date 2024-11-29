import api from './axiosConfig';

export const registerVote = async (
    esculturaId: number,
    voto: string,
    eventoId?: number
) => {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No se encontró el token de autenticación');

    const response = await api.post(
        `/votar/${eventoId}/${esculturaId}`,
        { voto },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
};