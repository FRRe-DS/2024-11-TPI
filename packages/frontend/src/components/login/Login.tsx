import React, { useState } from 'react';
import { login } from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';

const Login: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (username: string, password: string) => {
        setLoading(true);
        setError(null);
        console.log('Intentando iniciar sesión con:', { username, password });

        try {
            const user = await login(username, password);
            console.log('Respuesta del servidor:', user);
            if (user) {
                alert('Inicio de sesión exitoso');
                // Redirige basado en el rol del usuario
                navigate(user.role === 'admin' ? '/AdminPage' : '/HomePage');
                console.log('Redirigiendo a:', user.role === 'admin' ? '/AdminPage' : '/HomePage');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setError('Error al iniciar sesión. Por favor, revisa tus credenciales.');
        } finally {
            setLoading(false);
            console.log('Estado de carga finalizado:', loading);
        }
    };

    return (
        <LoginForm
            onSubmit={handleLogin}
            loading={loading}
            error={error}
        />
    );
};

export default Login;