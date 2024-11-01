// auth/services/AuthService.ts

import axios from 'axios';
import { tokenService } from '../services/tokenService.ts';

const API_URL = 'http://localhost:3000/api/auth';

export const register = async (username: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { username, email, password });
        const { token, user } = response.data;

        tokenService.setToken(token);
        tokenService.setRole(user.role);

        return user;
    } catch (error) {
        console.error('Error al registrar al usuario:', error);
        return null;
    }
};

export const login = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        const { token, user } = response.data;

        tokenService.setToken(token);
        tokenService.setRole(user.role);

        return user;
    } catch (error) {
        console.error('Error al autenticar al usuario:', error);
        return null;
    }
};

export const logout = () => {
    tokenService.removeToken();
    tokenService.removeRole();
    window.location.reload();
};

export const getUser = async () => {
    try {
        const token = tokenService.getToken();
        if (!token) throw new Error('No hay token de autenticación');

        const response = await axios.get(`http://localhost:3000/api/user`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        return null;
    }
};

export const isAuthenticated = () => !!tokenService.getToken();
export const getRole = () => tokenService.getRole();
