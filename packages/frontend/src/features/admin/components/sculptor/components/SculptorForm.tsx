import React, { useState } from 'react';
import { createUserAndEscultor } from '../../../../../services/escultorService.ts';

const SculptorForm: React.FC = () => {
    // Datos del usuario
    const [nombre, setNombre] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role] = useState('escultor'); // Fijo para escultores

    // Datos del escultor
    const [biografia, setBiografia] = useState('');
    const [imagen, setImagen] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [youtube, setYoutube] = useState('');
    const [linkedin, setLinkedin] = useState('');

    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const userData = {
                nombre,
                username,
                email,
                password,
                role,
            };

            const escultorData = {
                biografia,
                imagen,
                instagram,
                facebook,
                youtube,
                linkedin,
            };

            // Enviar los datos al servicio
            await createUserAndEscultor(userData, escultorData);
            alert('Usuario y escultor creados exitosamente');
            // Limpiar formulario
            setNombre('');
            setUsername('');
            setEmail('');
            setPassword('');
            setBiografia('');
            setImagen('');
            setInstagram('');
            setFacebook('');
            setYoutube('');
            setLinkedin('');
        } catch (err) {
            setError('Error al crear el usuario y escultor. Por favor, intenta nuevamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-y-auto max-h-96">
            {/* Campos de Usuario */}
            <div>
                <label className="block text-lg font-semibold text-gray-700">Nombre</label>
                <input
                    type="text"
                    placeholder="Nombre Completo"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full p-4 mt-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                />
            </div>

            <div>
                <label className="block text-lg font-semibold text-gray-700">Nombre de usuario</label>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-4 mt-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                />
            </div>

            <div>
                <label className="block text-lg font-semibold text-gray-700">Correo electrónico</label>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 mt-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                />
            </div>

            <div>
                <label className="block text-lg font-semibold text-gray-700">Contraseña</label>
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-4 mt-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                />
            </div>

            {/* Campos del Escultor */}
            <div>
                <label className="block text-lg font-semibold text-gray-700">Biografía</label>
                <textarea
                    placeholder="Biografía del escultor"
                    value={biografia}
                    onChange={(e) => setBiografia(e.target.value)}
                    className="w-full p-4 mt-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                />
            </div>

            <div>
                <label className="block text-lg font-semibold text-gray-700">URL de la imagen</label>
                <input
                    type="text"
                    placeholder="URL de la imagen"
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                    className="w-full p-4 mt-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-lg font-semibold text-gray-700">Instagram</label>
                    <input
                        type="text"
                        placeholder="Instagram"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        className="w-full p-4 mt-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-lg font-semibold text-gray-700">Facebook</label>
                    <input
                        type="text"
                        placeholder="Facebook"
                        value={facebook}
                        onChange={(e) => setFacebook(e.target.value)}
                        className="w-full p-4 mt-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-lg font-semibold text-gray-700">YouTube</label>
                    <input
                        type="text"
                        placeholder="YouTube"
                        value={youtube}
                        onChange={(e) => setYoutube(e.target.value)}
                        className="w-full p-4 mt-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-lg font-semibold text-gray-700">LinkedIn</label>
                    <input
                        type="text"
                        placeholder="LinkedIn"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        className="w-full p-4 mt-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 mt-6"
            >
                Crear Usuario y Escultor
            </button>

            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </form>
    );
};

export default SculptorForm;
