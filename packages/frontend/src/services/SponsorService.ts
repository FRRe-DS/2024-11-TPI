// packages/frontend/src/services/SponsorService.ts
import axios, { AxiosResponse } from 'axios';

const API_URL = '/api/sponsors';

// Define una interfaz para los datos del patrocinador
// packages/frontend/src/services/SponsorService.ts
export interface SponsorData {
    id?: string; // Haz que id sea opcional para crear patrocinadores
    name: string;
    logo?: string; // Logo puede ser opcional
}


// Define una interfaz para el patrocinador, si es diferente a SponsorData
export interface Sponsor extends SponsorData {
    // Aquí puedes agregar más propiedades si son necesarias
}

// Crear un nuevo patrocinador
const createSponsor = (sponsorData: SponsorData): Promise<AxiosResponse<SponsorData>> => {
    return axios.post(`${API_URL}`, sponsorData);
};

// Obtener todos los patrocinadores
const getSponsors = (): Promise<AxiosResponse<SponsorData[]>> => {
    return axios.get(`${API_URL}`);
};

// Actualizar un patrocinador
const updateSponsor = (id: string, sponsorData: SponsorData): Promise<AxiosResponse<SponsorData>> => {
    return axios.put(`${API_URL}/${id}`, sponsorData);
};

// Eliminar un patrocinador
const deleteSponsor = (id: string): Promise<AxiosResponse<void>> => {
    return axios.delete(`${API_URL}/${id}`);
};

const SponsorService = {
    createSponsor,
    getSponsors,
    updateSponsor,
    deleteSponsor,
};

export default SponsorService;
