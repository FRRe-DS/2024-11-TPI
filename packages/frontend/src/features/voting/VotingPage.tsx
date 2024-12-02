import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Para obtener los parámetros de la URL
import { getEsculturaporId } from '../../services/SculptureService.ts';
import {registerVote} from "../../services/VotingService.ts"; // Asumimos que tienes un servicio para obtener la info de la escultura y votar


interface Escultura {
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
                setEscultura((prev) => prev ? { ...prev, puntuacion: prev.puntuacion + puntaje } : prev);
            } catch (err) {
                setError('No se pudo registrar tu voto.');
            }
        }
    };

    if (loading) {
        return <p>Cargando información de la escultura...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            {escultura ? (
                <div>
                    <h1>{escultura.nombre}</h1>
                    <p>{escultura.descripcion}</p>
                    <p><strong>Autor:</strong> {escultura.escultor.usuario.nombre}</p>
                    <p><strong>QR Code:</strong> {QrCode}</p> {/* Mostrar el QR code de la URL */}
                    <p><strong>Puntuación actual:</strong> {escultura.puntuacion}</p>

                    {/* Aquí se muestra el sistema de estrellas */}
                    <div>
                        <p>Vota por esta escultura:</p>
                        <form>
                            <div className="clasificacion">
                                {/* Crear las estrellas como botones de radio */}
                                {[5, 4, 3, 2, 1].map((valor) => (
                                    <span key={valor}>
                                        <input
                                            type="radio"
                                            id={`radio${valor}`}
                                            name="estrellas"
                                            value={valor}
                                            checked={puntuacionSeleccionada === valor}
                                            onChange={() => manejarVoto(valor)} // Maneja el voto cuando se selecciona
                                        />
                                        <label htmlFor={`radio${valor}`}>★</label>
                                    </span>
                                ))}
                            </div>
                        </form>
                        {puntuacionSeleccionada !== null && (
                            <p>Has votado con {puntuacionSeleccionada} estrella{puntuacionSeleccionada > 1 ? "s" : ""}</p>
                        )}
                    </div>
                </div>
            ) : (
                <p>No se encontró la escultura.</p>
            )}
        </div>
    );
};

export default VotingPage;


