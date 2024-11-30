import React, { useEffect, useState } from "react";
import { fetchEscultores, deleteEscultor, setEscultorToUser } from "../../../../../services/escultorService"; // Ajusta la ruta según tu estructura

interface Escultor {
    userId: number;
    biografia: string | null;
    imagen: string;
    puntuacionTotal: number;
    instagram?: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
}

const EscultorDelete: React.FC = () => {
    const [escultores, setEscultores] = useState<Escultor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Cargar los escultores al montar el componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchEscultores();
                setEscultores(Array.isArray(data) ? data : []); // Ajusta según el formato de la respuesta
            } catch (err) {
                setError("Error al cargar la lista de escultores");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Manejar la eliminación de un escultor
    const handleDelete = async (userId: number) => {
        try {
            // Llamar al servicio para borrar el escultor
            await deleteEscultor(userId); // Convertimos el ID a string para que coincida con la API

            // Llamar al servicio para actualizar el rol del usuario a 'user'
            await setEscultorToUser(userId.toString(), "user");

            // Eliminar el escultor de la lista localmente después de la eliminación
            setEscultores(escultores.filter((escultor) => escultor.userId !== userId));
        } catch (err) {
            setError("Error al eliminar el escultor");
        }
    };

    // Mostrar un mensaje mientras cargan los escultores
    if (loading) return <p className="text-center text-lg">Cargando escultores...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="w-full max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Lista de Escultores</h3>

            {escultores.length > 0 ? (
                <div className="overflow-y-auto max-h-96"> {/* Agregado scroll y altura máxima */}
                    <div className="space-y-4">
                        {escultores.map((escultor) => (
                            <div
                                key={escultor.userId}
                                className="flex justify-between items-center p-4 border-b border-gray-200"
                            >
                                <div className="flex items-center">
                                    <img
                                        src={escultor.imagen || "/default-image.jpg"}
                                        alt={escultor.biografia || "Escultor"}
                                        className="w-16 h-16 object-cover rounded-full"
                                    />
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-800">
                                            {escultor.biografia || "Biografía no disponible"}
                                        </h4>
                                        <p className="text-gray-600">Puntuación: {escultor.puntuacionTotal}</p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleDelete(escultor.userId)}
                                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                                >
                                    Borrar
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-500">No hay escultores disponibles</p>
            )}
        </div>
    );
};

export default EscultorDelete;
