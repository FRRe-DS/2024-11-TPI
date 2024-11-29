import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUser, isAuthenticated } from "../services/AuthService";

const ProtectedRoute = ({ children, requiredRole }: { children: JSX.Element; requiredRole?: string }) => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (!isAuthenticated()) {
                    setRedirectToLogin(true);
                    setLoading(false);
                    return;
                }

                const fetchedUser = await getUser();
                if (fetchedUser && (!requiredRole || fetchedUser.role === requiredRole)) {
                    setUser(fetchedUser);
                } else {
                    setRedirectToLogin(true);
                }
            } catch (error) {
                console.error("Error fetching user:", error);
                setRedirectToLogin(true);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [requiredRole]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (redirectToLogin || !user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;