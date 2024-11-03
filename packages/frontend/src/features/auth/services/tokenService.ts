// src/features/auth/utils/AuthService.ts
export const tokenService = {
    setToken: (token: string) => localStorage.setItem('token', token),
    getToken: () => localStorage.getItem('token'),
    removeToken: () => localStorage.removeItem('token'),
    setRole: (role: string) => localStorage.setItem('role', role),
    getRole: () => localStorage.getItem('role'),
    removeRole: () => localStorage.removeItem('role'),

    setUser: (username: string) => localStorage.setItem('username', username),
    getUser: () => localStorage.getItem('username'),
    removeUser: () => localStorage.removeItem('username')
};

export const logout = () => {
    tokenService.removeToken();
    tokenService.removeRole();
    tokenService.removeUser();
    window.location.reload(); // Recargar para actualizar el estado de autenticación
};