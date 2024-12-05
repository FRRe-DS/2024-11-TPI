import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Para obtener los parámetros de la URL
import { getEsculturaporId } from '../../../../../services/SculptureService.ts';


interface Escultura {
    imagenFinal: any;
    plano: any;
    imagenes: Array<any>;
    escultor: any;
    id: string;
    nombre: string;
    descripcion: string;
    autor: string;
    puntuacion: number; // Agregar el campo puntuacion a la escultura
}

const EsculturasDetalles: React.FC = () => {
    // Obtener los parámetros de la URL
    const { esculturaId } = useParams<{ esculturaId: string }>();

    const [escultura, setEscultura] = useState<Escultura | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [selectedImage, setSelectedImage] = useState();


    useEffect(() => {
        // Función para obtener la información de la escultura usando el esculturaId
        const fetchEscultura = async () => {
            try {
                const data = await getEsculturaporId(esculturaId);  // Asumiendo que tienes una función para obtener la info de la escultura
                setSelectedImage(data.escultura.imagenes[0]);
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

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-black">
                <p className="text-lg font-medium">Cargando información de la escultura...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-black">
                <p className="text-lg font-medium">{error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-white p-4">
            {escultura ? (
                <div className="w-full max-w-6xl bg-white text-gray-800 rounded-lg shadow-lg p-6">
                    <h1 className="text-3xl font-bold text-center mb-4">{escultura.nombre}</h1>
                    <p className="text-center text-gray-600 mb-6">{escultura.descripcion}</p>
                    <p className="text-center text-gray-700">
                        <strong>Autor:</strong> {escultura.escultor.usuario.nombre}
                    </p>
                    <div className="flex justify-center mt-6">
                        <img
                            src={escultura.plano}
                            alt={`Escultura: ${escultura.nombre}`}
                            className="max-w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="grid gap-4">
                        {/* Imagen seleccionada arriba */}
                        <div className="flex justify-center items-center">
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={selectedImage}
                                alt="Selected"
                            />
                        </div>

                        {/* Lista de imágenes para seleccionar */}
                        <div className="flex gap-4 overflow-x-scroll">
                            {escultura.imagenes.map((url, index) => (
                                <div key={index} className="flex-shrink-0">
                                    <img
                                        className="w-50 h-32 object-cover rounded-lg cursor-pointer"
                                        src={url}
                                        alt={`Image ${index + 1}`}
                                        onClick={() => setSelectedImage(url)} // Actualiza la imagen seleccionada
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <img
                            src={escultura.imagenFinal}
                            alt={`Escultura: ${escultura.nombre}`}
                            className="max-w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <p className="text-center text-gray-700 mb-4">
                        <strong>Puntuación actual:</strong> {escultura.puntuacion}
                    </p>

                </div>
            ) : (
                <p className="text-lg font-medium">No se encontró la escultura.</p>
            )}
        </div>
    );
};

export default EsculturasDetalles;

