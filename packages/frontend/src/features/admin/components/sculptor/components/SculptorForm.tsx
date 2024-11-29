import React, { useState } from 'react';
import { createEscultor } from '../../../../../services/escultorService.ts';

const SculptorForm: React.FC = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [biografia, setBiografia] = useState('');
    const [imagen, setImagen] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await createEscultor({ nombre, email, biografia, imagen });
            alert('Escultor creado exitosamente');
            setNombre('');
            setEmail('');
            setBiografia('');
            setImagen('');
        } catch (err) {
            setError('Error al crear escultor. Por favor, intenta nuevamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                placeholder="Nombre del escultor"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full p-3 border rounded focus:ring"
                required
            />
            <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded focus:ring"
                required
            />
            <textarea
                placeholder="Biografía"
                value={biografia}
                onChange={(e) => setBiografia(e.target.value)}
                className="w-full p-3 border rounded focus:ring"
                required
            />
            <input
                type="text"
                placeholder="URL de la imagen"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
                className="w-full p-3 border rounded focus:ring"
            />
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Crear Escultor
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
    );
};

export default SculptorForm;