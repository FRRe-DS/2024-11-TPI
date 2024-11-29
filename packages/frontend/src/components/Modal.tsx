import React from 'react';

interface ModalProps {
    isOpen: boolean; // Determina si el modal está abierto o cerrado
    onClose: () => void; // Función que se ejecuta al cerrar el modal
    children: React.ReactNode; // Contenido del modal
}

/**
 * Componente de modal reutilizable.
 * Este componente maneja la lógica básica para mostrar u ocultar un modal, siguiendo SRP.
 */
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Si el modal no está abierto, no renderiza nada

    return (
        <div className="modal-overlay"> {/* Overlay del modal */}
            <div className="modal-content"> {/* Contenido del modal */}
                <button onClick={onClose} className="modal-close"> {/* Botón de cerrar */}
                    X
                </button>
                {children} {/* Renderiza el contenido pasado como children */}
            </div>
        </div>
    );
};

export default Modal; // Exporta el componente para su uso en otros components
