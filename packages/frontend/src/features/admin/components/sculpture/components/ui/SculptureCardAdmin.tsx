import React, { useState } from 'react';

interface SculptureCardAdminProps {
    id: number;
    nombre: string;
    descripcion: string | null;
    fechaCreacion: string | null;
    tematica: string | null;
    imagenFinal?: string | null;
    onSave: (updatedSculpture: any) => void;
}

const SculptureCardAdmin: React.FC<SculptureCardAdminProps> = ({
                                                                   id,
                                                                   nombre,
                                                                   descripcion,
                                                                   fechaCreacion,
                                                                   tematica,
                                                                   imagenFinal,
                                                                   onSave,
                                                               }) => {
    const [editing, setEditing] = useState(false);
    const [editedSculpture, setEditedSculpture] = useState({
        id,
        nombre,
        descripcion,
        fechaCreacion,
        tematica,
        imagenFinal,
    });
    const [showFullDescription, setShowFullDescription] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditedSculpture((prev) => ({ ...prev, [name]: value || null })); // Cambio aquí para asignar null si el valor es vacío
    };

    const handleSave = () => {
        onSave(editedSculpture);
        setEditing(false);
    };

    return (
        <div className="border p-6 rounded-lg shadow-lg bg-white flex flex-col justify-between max-w-sm mx-auto">
            {editing ? (
                <div>
                    <input
                        name="nombre"
                        value={editedSculpture.nombre}
                        onChange={handleInputChange}
                        className="border p-2 mb-2 w-full rounded"
                        placeholder="Nombre"
                    />
                    <textarea
                        name="descripcion"
                        value={editedSculpture.descripcion || ''}
                        onChange={handleInputChange}
                        className="border p-2 mb-2 w-full rounded"
                        placeholder="Descripción"
                    />
                    <input
                        name="fechaCreacion"
                        type="date"
                        value={editedSculpture.fechaCreacion || ''}
                        onChange={handleInputChange}
                        className="border p-2 mb-2 w-full rounded"
                    />
                    <input
                        name="tematica"
                        value={editedSculpture.tematica || ''}
                        onChange={handleInputChange}
                        className="border p-2 mb-2 w-full rounded"
                        placeholder="Temática"
                    />
                    <input
                        name="imagenFinal"
                        value={editedSculpture.imagenFinal || ''}
                        onChange={handleInputChange}
                        className="border p-2 mb-2 w-full rounded"
                        placeholder="URL de la imagenFinal"
                    />
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full"
                    >
                        Guardar
                    </button>
                </div>
            ) : (
                <div>
                    <h3 className="text-xl font-bold mb-3 text-center">{nombre}</h3>
                    {imagenFinal ? (
                        <img
                            src={imagenFinal}
                            alt={nombre}
                            className="w-full h-64 object-cover mb-4 rounded"
                        />
                    ) : (
                        <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500 mb-4 rounded">
                            Sin imagenFinal
                        </div>
                    )}
                    <p className="text-sm mb-2">
                        {showFullDescription
                            ? descripcion || ''
                            : `${descripcion?.slice(0, 10)}...`}
                        {descripcion && descripcion.length > 100 && (
                            <button
                                onClick={() => setShowFullDescription(!showFullDescription)}
                                className="text-blue-500 underline ml-1"
                            >
                                {showFullDescription ? 'Ver menos' : 'Ver más'}
                            </button>
                        )}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">Fecha de creación: {fechaCreacion || 'N/A'}</p>
                    <p className="text-sm text-gray-600 mb-4">Temática: {tematica || 'N/A'}</p>
                    <button
                        onClick={() => setEditing(true)}
                        className="bg-gray-500 text-white px-4 py-2 rounded w-full"
                    >
                        Editar
                    </button>
                </div>
            )}
        </div>
    );
};

export default SculptureCardAdmin;
