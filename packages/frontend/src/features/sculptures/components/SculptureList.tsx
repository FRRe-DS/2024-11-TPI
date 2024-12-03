import React, { useState, useEffect } from 'react';
import { getEsculturasByEvent, getEsculturas } from '../../../services/SculptureService';
import SculptureCard from './ui/SculptureCard.tsx';
import { registerVote } from '../../../services/VotingService.ts';

interface VoteButtonProps {
    eventoId?: number;
    esculturaId: number;
}

const VoteButton: React.FC<VoteButtonProps> = ({ eventoId, esculturaId }) => {
    const [isVoted, setIsVoted] = useState(false);

    const handleVoteClick = async () => {
        try {
            if (isVoted) return;

            await registerVote(esculturaId, 'Sí', eventoId);

            setIsVoted(true);
        } catch (error) {
            console.error('Error al registrar el voto:', error);
        }
    };

    return (
        <button
            onClick={handleVoteClick}
            disabled={isVoted}
            className={`cursor-pointer transition-all px-6 py-2 rounded-lg border-b-[4px]
                ${isVoted
                ? 'bg-gray-400 text-gray-700 cursor-not-allowed border-gray-500'
                : 'bg-blue-500 text-white border-blue-600 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]'
            }`}
        >
            {isVoted ? 'Voto Registrado' : 'Votar'}
        </button>
    );
};

interface SculptureListProps {
    eventoId?: number;
}

const SculptureList: React.FC<SculptureListProps> = ({ eventoId }) => {
    const [esculturas, setEsculturas] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEsculturas = async () => {
            try {
                setLoading(true);
                const data = eventoId ? await getEsculturasByEvent(eventoId) : await getEsculturas();
                setEsculturas(data.esculturas);
            } catch (error) {
                console.error('Error al obtener las esculturas:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEsculturas();
    }, [eventoId]);

    if (loading) {
        return <p className="text-center text-gray-500">Cargando esculturas...</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {esculturas.length > 0 ? (
                esculturas.map((escultura: any) => (
                    <div key={escultura.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                        <SculptureCard
                            nombre={escultura.nombre}
                            descripcion={escultura.descripcion}
                            fechaCreacion={escultura.fechaCreacion}
                            tematica={escultura.tematica}
                            id={escultura.id}
                            imagen={escultura.imagen} // Agregado para mostrar la imagen
                        />
                        <div className="mt-4">
                            <VoteButton eventoId={eventoId} esculturaId={escultura.id} />
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">No hay esculturas disponibles</p>
            )}
        </div>
    );
};

export default SculptureList;