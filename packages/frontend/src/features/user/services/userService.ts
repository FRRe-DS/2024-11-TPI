// src/features/user/services/userService.ts

import axios from 'axios';
import { User } from '../types/userTypes';

const userService = {
    getCurrentUser: async (): Promise<User | null> => {
        try {
            const response = await axios.get('/api/user/current');
            return response.data; // Asegúrate de que aquí esté el objeto usuario
        } catch (error) {
            console.error('Error fetching current user:', error);
            return null; // Retorna null si hay un error
        }
    },
    logout: async (): Promise<void> => {
        await axios.post('/api/user/logout');
    },
};

export default userService;
