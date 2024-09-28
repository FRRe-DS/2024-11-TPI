import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getUser } from './services/AuthService.ts'; // Servicio para obtener el usuario autenticado

const ProtectedRoute = ({ children, requiredRole }: { children: JSX.Element, requiredRole: string }) => {
    const [user, setUser] = useState<any>(null); // Estado para almacenar los datos del usuario
    const [loading, setLoading] = useState(true); // Estado para manejar el proceso de carga

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const fetchedUser = await getUser(); // Resolver la promesa de getUser
                setUser(fetchedUser); // Guardar los datos del usuario en el estado
            } catch (error) {
                console.error('Error fetching user:', error);
            } finally {
                setLoading(false); // Finaliza el estado de carga
            }
        };

        fetchUser();
    }, []);

    if (loading) {
        return <div>Cargando...</div>; // Mostrar un estado de carga mientras se obtiene el usuario
    }

    if (!user) {
        return <Navigate to="/login" />; // Si no está autenticado, redirigir a login
    }

    if (user.role !== requiredRole) {
        return <Navigate to="/forbidden" />; // Si no tiene el rol adecuado, redirigir a acceso prohibido
    }

    return children; // Si el rol coincide, renderizar el componente hijo
};

export default ProtectedRoute;
