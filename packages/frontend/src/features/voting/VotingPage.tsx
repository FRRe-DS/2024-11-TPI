import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Para obtener los parámetros de la URL
import { getEsculturaporId } from '../../services/SculptureService.ts';
import {registerVote} from "../../services/VotingService.ts"; // Asumimos que tienes un servicio para obtener la info de la escultura y votar


interface Escultura {
    imagenFinal: any;
    escultor: any;
    id: string;
    nombre: string;
    descripcion: string;
    autor: string;
    puntuacion: number; // Agregar el campo puntuacion a la escultura
}

const VotingPage: React.FC = () => {
    // Obtener los parámetros de la URL
    const { QrCode, esculturaId } = useParams<{ QrCode: string; esculturaId: string }>();

    const [escultura, setEscultura] = useState<Escultura | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [puntuacionSeleccionada, setPuntuacionSeleccionada] = useState<number | null>(null); // Estado para la puntuación seleccionada

    useEffect(() => {
        // Función para obtener la información de la escultura usando el esculturaId
        const fetchEscultura = async () => {
            try {
                const data = await getEsculturaporId(esculturaId);  // Asumiendo que tienes una función para obtener la info de la escultura
                console.log(data.escultura);
                setEscultura(data.escultura);
            } catch (err) {
                setError('No se pudo obtener la información de la escultura.');
            } finally {
                setLoading(false);
            }
        };

        if (esculturaId) {
            fetchEscultura();
        }
    }, [esculturaId]); // Solo se vuelve a ejecutar si el esculturaId cambia

    // Función para manejar el cambio en la selección de estrellas
    const manejarVoto = async (puntaje: number) => {
        if (escultura) {
            try {
                // Enviar la votación al backend
                const response = await registerVote(escultura.id, puntaje, QrCode);
                console.log(response);
                setPuntuacionSeleccionada(puntaje); // Actualizar el estado con el puntaje seleccionado
                // Actualizar la puntuación de la escultura
            } catch (err) {
                setError('No se pudo registrar tu voto.');
            }
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-black">
                <p className="text-lg font-medium">Cargando información de la escultura...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-black">
                <p className="text-lg font-medium">{error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-white p-4">
            {escultura ? (
                <div className="w-full max-w-6xl bg-white text-gray-800 rounded-lg shadow-lg p-6">
                    <h1 className="text-3xl font-bold text-center mb-4">{escultura.nombre}</h1>
                    <p className="text-center text-gray-600 mb-6">{escultura.descripcion}</p>
                    <p className="text-center text-gray-700">
                        <strong>Autor:</strong> {escultura.escultor.usuario.nombre}
                    </p>
                    <div className="flex justify-center mt-6">
                        <img
                            src={escultura.imagenFinal}
                            alt={`Escultura: ${escultura.nombre}`}
                            className="max-w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <p className="text-center text-gray-700 mb-4">
                        <strong>Puntuación actual:</strong> {escultura.puntuacion}
                    </p>

                    <div className="text-center mb-6">
                        <p className="text-lg font-medium">Escanea este código QR para más detalles:</p>
                        <div className="inline-block bg-gray-100 p-4 rounded-lg shadow-md mt-2">
                            <p className="font-mono text-xs">{QrCode}</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-lg font-medium mb-2">Vota por esta escultura:</p>
                        <div className="flex justify-center space-x-2">
                            {[1, 2, 3, 4, 5].map((valor) => (
                                <button
                                    key={valor}
                                    onClick={() => manejarVoto(valor)}
                                    onMouseEnter={() => setPuntuacionSeleccionada(valor)} // Cambiar color al pasar el mouse
                                    onMouseLeave={() => setPuntuacionSeleccionada(null)} // Restablecer color al quitar el mouse
                                    className={`text-4xl transition-transform transform ${
                                        puntuacionSeleccionada && puntuacionSeleccionada >= valor
                                            ? 'text-yellow-500 scale-125'
                                            : 'text-gray-400 hover:text-yellow-400 hover:scale-110'
                                    }`}
                                    aria-label={`Votar con ${valor} estrellas`}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                        {puntuacionSeleccionada !== null && (
                            <p className="mt-4 text-lg">
                                Has votado con{' '}
                                <span className="font-bold">{puntuacionSeleccionada}</span>{' '}
                                estrella{puntuacionSeleccionada > 1 ? 's' : ''}.
                            </p>
                        )}
                    </div>
                </div>
            ) : (
                <p className="text-lg font-medium">No se encontró la escultura.</p>
            )}
        </div>
    );
};

export default VotingPage;

