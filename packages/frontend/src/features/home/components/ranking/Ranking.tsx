import {useState, useEffect} from 'react';
import {fetchEscultoresConNombre} from '../../../../services/escultorService.ts';
import {getEsculturas} from "../../../../services/SculptureService.ts"; // Aseg煤rate de que la ruta sea correcta

interface Escultor {
    userId: number;
    imagen?: string;
    usuario: { nombre: string };
    puntuacionTotal?: number;
}

interface Escultura {
    userId: number;  // Aseg煤rate de que esto corresponde a la relaci贸n con el escultor
    puntuacion: number;
}

const Ranking = () => {
    const [escultores, setEscultores] = useState<any[]>([]);

    useEffect(() => {
        const loadEscultores = async () => {
            try {
                // Obtener los escultores con su nombre y dem谩s datos
                const data = await fetchEscultoresConNombre();
                console.log('Escultores: ', data);

                // Obtener las esculturas
                const response = await getEsculturas();
                console.log('Esculturas:', response);

                // Acceder a la propiedad 'esculturas' del objeto que se devuelve
                const esculturas = response.esculturas; // Ahora es un arreglo de esculturas

                // Verifica si 'esculturas' es un arreglo
                if (!Array.isArray(esculturas)) {
                    console.error("Las esculturas no son un arreglo", esculturas);
                    return;
                }

                // Asociar la puntuaci贸n de la escultura con el escultor
                const escultoresConPuntuacion = data.map((escultor: Escultor) => {
                    // Buscar la escultura asociada al escultor usando el ID del escultor
                    const escultura = esculturas.find((escultura: Escultura) => escultura.userId === escultor.userId);
                    return {
                        ...escultor, // Conserva los datos del escultor
                        puntuacionTotal: escultura ? escultura.puntuacion : 0, // Si hay escultura, toma su puntuaci贸n
                    };
                });

                // Ordenar los escultores por puntuaci贸n
                const sortedEscultores = escultoresConPuntuacion.sort((a, b) => b.puntuacionTotal - a.puntuacionTotal);

                // Actualizar el estado con los escultores ordenados
                setEscultores(sortedEscultores);

            } catch (error) {
                console.error("Error al cargar los escultores:", error);
            }
        };


        loadEscultores();
    }, []);

    const getMedalIcon = (index: number) => {
        if (index === 0) return "馃"; // Oro
        if (index === 1) return "馃"; // Plata
        if (index === 2) return "馃"; // Bronce
        return "";
    };

    return (
        <div
            className="absolute inset-0 overflow-hidden bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 min-h-screen flex flex-col items-center py-8 px-4 sm:px-8"
        >
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
                Ranking de Escultores
            </h1>

            {/* Contenedor que cambia seg煤n los breakpoints */}
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="sm:max-h-96 sm:overflow-y-auto sm:touch-pan-y lg:overflow-hidden lg:max-h-full">
                    <table className="table-auto w-full text-left">
                        <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-4 py-3 text-center">#</th>
                            <th className="px-4 py-3">Nombre</th>
                            <th className="px-4 py-3 text-center">Puntuaci贸n Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {escultores.map((escultor, index) => (
                            <tr
                                key={escultor.userId}
                                className={`${
                                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                                } hover:bg-gray-200`}
                            >
                                <td className="px-4 py-3 text-center text-lg font-semibold">
                                    <span className="text-2xl">{getMedalIcon(index)}</span>
                                </td>
                                <td className="px-4 py-3 flex items-center">
                                    <img
                                        src={escultor.imagen || "https://default-avatar.com/imagen.png"}
                                        alt="Escultor"
                                        className="w-10 h-10 rounded-full mr-4"
                                    />
                                    <span className="text-gray-800 font-medium">
                  {escultor["usuario.nombre"]}
                </span>
                                </td>
                                <td className="px-4 py-3 text-center text-lg font-bold text-gray-700">
                                    {escultor.puntuacionTotal}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    );
};

export default Ranking;