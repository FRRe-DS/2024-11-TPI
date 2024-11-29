export const tokenService = {
    setToken: (token: string) => localStorage.setItem('token', token),
    getToken: () => localStorage.getItem('token'),
    removeToken: () => localStorage.removeItem('token'),

    setRole: (role: string) => localStorage.setItem('role', role),
    getRole: () => localStorage.getItem('role'),
    removeRole: () => localStorage.removeItem('role'),

    setUser: (username: string) => localStorage.setItem('username', username),
    getUser: () => localStorage.getItem('username'),
    removeUser: () => localStorage.removeItem('username'),

    setUserData: (data: { username: string; role: string }) => {
        localStorage.setItem('user', JSON.stringify(data));
    },

    getUserData: () => {
        const data = localStorage.getItem('user');
        return data ? JSON.parse(data) : null;
    },

    removeUserData: () => localStorage.removeItem('user'),
};

export const logout = () => {
    tokenService.removeToken();
    tokenService.removeUserData();
    window.location.reload();
};