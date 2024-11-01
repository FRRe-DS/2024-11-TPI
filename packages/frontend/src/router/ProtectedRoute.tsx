import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getUser, isAuthenticated } from '../features/auth/utils/AuthService.ts'; // Agregar isAuthenticated

const ProtectedRoute = ({ children }: { children: JSX.Element, requiredRole: string }) => {
    const [user, setUser] = useState<any>(null); // Estado para almacenar los datos del usuario
    const [loading, setLoading] = useState(true); // Estado para manejar el proceso de carga
    const [redirectToLogin, setRedirectToLogin] = useState(false); // Maneja la redirección a login

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (!isAuthenticated()) {
                    setRedirectToLogin(true);
                    setLoading(false);
                    return;
                }

                const fetchedUser = await getUser();
                if (fetchedUser) {
                    setUser(fetchedUser);
                } else {
                    setRedirectToLogin(true); // Redirigir si no se obtiene el usuario
                }
            } catch (error) {
                console.error('Error fetching user:', error);
                setRedirectToLogin(true); // Redirigir en caso de error
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);


    if (loading) {
        return <div>Cargando...</div>; // Mostrar un estado de carga mientras se obtiene el usuario
    }

    if (redirectToLogin || !user) {
        return <Navigate to="/login" />; // Si no está autenticado, redirigir a login
    }


    return children; // Si el rol coincide, renderizar el componente hijo
};

export default ProtectedRoute;
