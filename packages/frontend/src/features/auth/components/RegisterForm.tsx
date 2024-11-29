import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface RegisterFormProps {
    onSwitchToLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
    const [nombre, setNombre] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Inicializa el hook useNavigate
    const API_URL = import.meta.env.VITE_API_URL + '/api';
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/auth/register`, {
                nombre,
                username,
                email,
                password,
                role: 'user'
            });

            console.log('Respuesta del servidor:', response.data);

            if (response.data.message === 'Usuario creado con éxito') {
                alert('Usuario registrado con éxito');
                navigate('/ '); // Redirige al usuario al home
            } else {
                setError('No se pudo registrar el usuario. Inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            setError('Hubo un error al registrar el usuario.');
        }
    };

    return (
        <div
            className="max-w-md w-full bg-gradient-to-r from-purple-400 to-blue-600 rounded-md shadow-xl overflow-hidden p-8 space-y-8">
            <h2 className="text-center text-4xl font-extrabold text-white ">Registrarse</h2>
            <p className="text-center text-white">
                Crea una cuenta nueva
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-300"
                        required
                    />
                    <label htmlFor="username"
                           className="absolute left-0 -top-3.5 text-gray-300 text-sm peer-focus:-top-3.5 peer-focus:text-purple-200 peer-focus:text-sm"
                    > Usuario </label>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-300"
                        required
                    />
                    <label htmlFor="username"
                           className="absolute left-0 -top-3.5 text-gray-300 text-sm peer-focus:-top-3.5 peer-focus:text-purple-200 peer-focus:text-sm"
                    > Nombre Completo </label>
                </div>
                <div className="relative">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-300"
                        required
                    />
                    <label htmlFor="email"
                           className="absolute left-0 -top-3.5 text-gray-300 text-sm peer-focus:-top-3.5 peer-focus:text-purple-200 peer-focus:text-sm">
                        Email </label>
                </div>
                <div className="relative">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-300"
                        required
                    />
                    <label htmlFor="password"
                           className="absolute left-0 -top-3.5 text-gray-300 text-sm peer-focus:-top-3.5 peer-focus:text-purple-200 peer-focus:text-sm">Contraseña</label>
                </div>
                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-purple-400 hover:bg-purple-600 rounded-md shadow-lg text-white font-semibold transition duration-200"
                    >
                        Registrarse
                    </button>
                    {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
                </div>
                <p className="text-center text-gray-300">
                    ¿Ya tienes una cuenta?{' '}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onSwitchToLogin();
                        }}
                        className="text-purple-200 hover:underline focus:outline-none ml-2"
                    >
                        Iniciar sesión
                    </button>
                </p>


            </form>
        </div>
    );
};

export default RegisterForm;
