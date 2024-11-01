// src/features/user/services/userService.ts

import axios from 'axios';
import { User } from '../types/userTypes';

const userService = {
    getCurrentUser: async (): Promise<User> => {
        const response = await axios.get('/api/user/current');
        return response.data;
    },
    logout: async (): Promise<void> => {
        await axios.post('/api/user/logout');
    },
};

export default userService;