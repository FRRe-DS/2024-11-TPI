import React from 'react';

interface VoteButtonProps {
    onVote: () => void; // Función que se ejecuta al votar
}

/**
 * Componente específico del dominio para manejar la votación.
 * Encapsula la lógica del botón de votación, siguiendo SRP.
 */
const VoteButton: React.FC<VoteButtonProps> = ({ onVote }) => {
    return (
        <button onClick={onVote} className="vote-button"> {/* Manejador de clics y clase CSS */}
            Votar {/* Texto del botón */}
        </button>
    );
};

export default VoteButton; // Exporta el componente para su uso en otros components
