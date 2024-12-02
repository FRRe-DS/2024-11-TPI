import api from './axiosConfig.ts'

export const GenerarQr = async (esculturaId: string): Promise<void> => {
    try {
        const response = await api.post('/qr/generate', { esculturaId });
        return response.data.qrCode
    }
    catch (error) {
        throw new Error ('Error al crear qr de escultura');
    }
}