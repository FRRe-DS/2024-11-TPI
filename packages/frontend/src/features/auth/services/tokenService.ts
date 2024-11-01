export const tokenService = {
    setToken: (token: string) => localStorage.setItem('token', token),
    getToken: () => localStorage.getItem('token'),
    removeToken: () => localStorage.removeItem('token'),
    setRole: (role: string) => localStorage.setItem('role', role),
    getRole: () => localStorage.getItem('role'),
    removeRole: () => localStorage.removeItem('role')
};
