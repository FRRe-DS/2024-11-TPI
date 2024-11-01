// src/features/user/hooks/useUser.ts

import { useEffect, useState } from 'react';
import userService from '../services/userService';
import { User } from '../types/userTypes';

const useUser = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const currentUser = await userService.getCurrentUser();
                setUser(currentUser);
            } catch (error) {
                console.error('Error fetching user:', error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const handleLogout = async () => {
        try {
            await userService.logout();
            setUser(null); // Limpia el usuario del estado
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return { user, loading, handleLogout };
};

export default useUser;