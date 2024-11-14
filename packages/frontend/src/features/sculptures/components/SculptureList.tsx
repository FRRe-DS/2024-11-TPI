import React, { useState, useEffect } from 'react';
import { getEsculturasbyEvent, getEsculturas } from '../../../services/SculptureService.ts';
import SculptureCard from "../../../components/ui/SculptureCard.tsx"
import { registerVote } from '../../../services/VotingService.ts'; // Importa la función de votación

interface VoteButtonProps {
    eventoId?: number;  // Define que eventoId es un string
    esculturaId: number;  // Define que esculturaId es un string
}

const VoteButton: React.FC<VoteButtonProps> = ({ eventoId, esculturaId }) => {
    const [isVoted, setIsVoted] = useState(false); // Estado para controlar si ya se votó

    // Función que se ejecuta al hacer clic en el botón
    const handleVoteClick = async () => {
        try {
            // Si ya se votó, no hacer nada
            if (isVoted) return;

            // Llamada para registrar el voto
            await registerVote(esculturaId, 'Sí', eventoId);  // Aquí puedes cambiar el voto a 'Sí' o 'No' según lo que necesites

            // Cambiar el estado para mostrar que el voto se registró
            setIsVoted(true);
        } catch (error) {
            console.error('Error al registrar el voto:', error);
        }
    };

    return (
        <button
            onClick={handleVoteClick} // Asigna la función que maneja el clic
            className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                border-blue-600
                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
            {isVoted ? 'Voto Registrado' : 'Votar'} {/* Cambia el texto dependiendo del estado del voto */}
        </button>
    );
};

interface SculptureListProps {
    eventoId?: number;  // Hacemos que 'eventoId' sea opcional
}

const SculptureList: React.FC<SculptureListProps> = ({ eventoId }) => {
    const [esculturas, setEsculturas] = useState<any[]>([]);

    useEffect(() => {
        const fetchEsculturas = async () => {
            try {
                let data;
                if (eventoId) {
                    // Si existe eventoId, se obtienen las esculturas por evento
                    data = await getEsculturasbyEvent(eventoId);
                } else {
                    // Si no existe eventoId, se obtienen todas las esculturas
                    data = await getEsculturas();
                }
                setEsculturas(data);
            } catch (error) {
                console.error('Error al obtener las esculturas:', error);
            }
        };

        fetchEsculturas();
    }, [eventoId]); // Agregamos 'eventoId' a las dependencias para que se vuelva a ejecutar cuando cambie

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {esculturas.length > 0 ? (
                esculturas.map((escultura: any) => (
                    <div>
                    <SculptureCard
                        key={escultura.id}
                        nombre={escultura.nombre}
                        descripcion={escultura.descripcion}
                        fechaCreacion={escultura.fechaCreacion}
                        tematica={escultura.tematica}
                        id={escultura.id}
                        puntuacion={5}
                    />
                    <VoteButton eventoId={eventoId} esculturaId={escultura.id}/>
                    </div>
                ))
            ) : (
                <p>No hay esculturas disponibles</p>
            )}
        </div>
    );
};

export default SculptureList;

