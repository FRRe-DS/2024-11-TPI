import api from './axiosConfig';

/**
 * Función para registrar un voto en una escultura.
 *
 * @param esculturaId - ID de la escultura a la que se le da el voto.
 * @param voto - El valor del voto (como string, por ejemplo: "like", "dislike").
 * @param eventoId - (Opcional) ID del evento asociado al voto.
 * @returns La respuesta de la API con los datos del voto registrado.
 * @throws Error si no se encuentra el token de autenticación o si la solicitud falla.
 */
export const registerVote = async (
    esculturaId: number,
    voto: string,
    eventoId?: number
) => {
    const token = localStorage.getItem('token');

    // Verificar si el token está presente en localStorage
    if (!token) throw new Error('Token de autenticación no encontrado');

    try {
        // Realizar la solicitud POST para registrar el voto
        const { data } = await api.post(
            `/votar/${eventoId ?? ''}/${esculturaId}`,
            { voto },
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        return data;
    } catch {
        // Error mínimo sin detalles adicionales
        throw new Error('Error al registrar el voto');
    }
};