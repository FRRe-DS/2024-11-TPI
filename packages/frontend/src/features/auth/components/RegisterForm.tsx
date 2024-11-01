// RegisterForm.tsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Inicializa el hook useNavigate

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            console.log('Enviando datos:', { username, email, password });
            const response = await axios.post('http://localhost:3000/api/auth/register', {
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
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200"
            >
                Registrarse
            </button>
            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        </form>
    );
};

export default RegisterForm;
