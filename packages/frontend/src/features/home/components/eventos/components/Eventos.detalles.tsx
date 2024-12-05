import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { getEventoById } from '../../../../../services/EventService.ts';
import SculptureList from "../../esculturas/components/SculptureList.tsx";

interface Evento {
    id: string;
    nombre: string;
    descripcion: string;
    tematica: string;
    fechaInc: string;
    fechaFin: string;
    imagen: string;
}

const EventosDetalles: React.FC = () => {
    const { id = '' } = useParams<{ id: string }>();
    const [evento, setEvento] = useState<Evento | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchEvento = async () => {
            try {
                const data = await getEventoById(id);
                if (data && data.evento) {
                    setEvento(data.evento);
                } else {
                    setError('Evento no encontrado');
                }
            } catch (e) {
                setError('No se pudo obtener el evento. Intenta nuevamente.');
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchEvento();
    }, [id]);

    if (loading) {
        return <p className="text-center text-gray-500">Cargando detalles del evento...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    if (!evento) {
        return <p className="text-center text-gray-500">Evento no encontrado</p>;
    }

    return (
        // Contenedor principal
        <div
            className="relative w-full h-full overflow-hidden bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100"
        >

            {/* Contenido */}
            <div className="relative w-full h-full overflow-hidden p-10">

                {/* Detalles del evento */}
                <div
                    className="max-w-6xl mx-auto bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out text-white"
                >
                    {/* Imagen del evento */}
                    <div className="relative">
                        <img
                            src={evento.imagen}
                            alt={`Imagen del evento ${evento.nombre}`}
                            className="w-full h-96 object-cover"
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-4xl font-bold text-white">
                            {evento.nombre}
                        </div>
                    </div>

                    {/* Información */}
                    <div className="p-10">
                        <h1 className="text-5xl font-extrabold text-white drop-shadow-md text-center">
                            {evento.nombre}
                        </h1>
                        <p className="text-lg mt-6 text-gray-200 leading-relaxed text-center">
                            {evento.descripcion}
                        </p>
                        <div className="mt-8 space-y-4 text-lg">
                            <p className="flex items-center">
                                <span className="font-semibold">🎨 Temática:</span>{' '}
                                <span className="ml-2">{evento.tematica}</span>
                            </p>
                            <p className="flex items-center">
                                <span className="font-semibold">📅 Fecha de inicio:</span>{' '}
                                <span className="ml-2">
                    {new Date(evento.fechaInc).toLocaleDateString('es-ES')}
                </span>
                            </p>
                            <p className="flex items-center">
                                <span className="font-semibold">🏁 Fecha de finalización:</span>{' '}
                                <span className="ml-2">
                    {new Date(evento.fechaFin).toLocaleDateString('es-ES')}
                </span>
                            </p>
                        </div>
                    </div>
                </div>


                {/* Lista de esculturas relacionadas */}
                <div className="relative w-full h-full overflow-hidden p-10 rounded-xl">
                    <SculptureList eventoId={evento.id}/>
                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 w-full flex justify-center">
                    <Link
                        to="/"
                        className="flex items-center justify-center aspect-[6/1] cursor-pointer rounded-md border-2 border-gray-800 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4 text-md font-bold shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gradient-to-br hover:from-yellow-500 hover:to-red-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 fill-white mr-4"
                        >
                            <path
                                d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
                            />
                        </svg>
                        Volver
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default EventosDetalles;
