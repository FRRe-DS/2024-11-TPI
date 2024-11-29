import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../layout/footer/Footer.tsx';
import EventCard from "../events/components/ui/EventCard.tsx"; // Componente para mostrar los detalles del evento

const VotingPage: React.FC = () => {
    const { eventoId } = useParams<{ eventoId: string }>(); // Obtener el eventoId de la URL
    const [evento, setEvento] = useState<any>(null); // Almacenar la información del evento
    const [error, setError] = useState<string | null>(null); // Manejo de errores

    useEffect(() => {
        const fetchEvento = async () => {
            try {
                const response = await axios.get(`/api/eventos/${eventoId}`);
                setEvento(response.data); // Almacenar los datos del evento
            } catch (error) {
                setError('No se pudo obtener el evento. Intenta nuevamente.');
                console.error('Error al obtener el evento:', error);
            }
        };

        if (eventoId) {
            fetchEvento(); // Solo buscar el evento si hay un ID
        }
    }, [eventoId]);

    if (error) {
        return <p className="text-red-500">{error}</p>; // Mostrar mensaje de error si falla la solicitud
    }

    if (!evento) {
        return <p>Cargando detalles del evento...</p>; // Mostrar mensaje mientras se cargan los datos
    }

    return (
        <div className="flex flex-col min-h-screen">

            <div className="p-6">
                <h1 className="text-4xl font-bold">{evento.nombre}</h1>
                <p className="text-xl mt-4">{evento.descripcion}</p>
                <p className="text-lg mt-2 text-gray-600">Temática: {evento.tematica}</p>
                <img src={evento.imagen} alt={evento.nombre} className="mt-6 w-full h-auto" />
            </div>
            {/* Componente que muestra los detalles del evento */}
            <EventCard
                key={evento.id}
                nombre={evento.nombre}
                descripcion={evento.descripcion}
                imagen={evento.imagen}
                fecha={evento.fecha}
                tematica={evento.tematica}
                id={evento.id}
            />
            <Footer />
        </div>
    );
};

export default VotingPage;
