import React from 'react';

interface SculptorCardProps {
    name: string; // Nombre del escultor
    bio: string; // Biografía del escultor
    imageUrl: string; // URL de la imagen del escultor
}

/**
 * Componente específico del dominio para mostrar información de un escultor.
 * Encapsula la lógica y presentación de un escultor, siguiendo SRP.
 */
const SculptorCard: React.FC<SculptorCardProps> = ({ name, bio, imageUrl }) => {
    return (
        <div className="sculptor-card"> {/* Clase CSS para estilo */}
            <img src={imageUrl} alt={name} className="sculptor-image" /> {/* Imagen del escultor */}
            <h3>{name}</h3> {/* Nombre del escultor */}
            <p>{bio}</p> {/* Biografía del escultor */}
        </div>
    );
};

export default SculptorCard; // Exporta el componente para su uso en otros componentes
