import { useState, useEffect } from 'react';
import { fetchEscultoresConNombre } from '../../services/escultorService.ts'; // Asegúrate de que la ruta sea correcta

const Ranking = () => {
    const [escultores, setEscultores] = useState<any[]>([]);

    useEffect(() => {
        const loadEscultores = async () => {
            try {
                const data = await fetchEscultoresConNombre();
                const sortedEscultores = data.sort((a, b) => b.puntuacionTotal - a.puntuacionTotal);
                setEscultores(sortedEscultores);
            } catch (error) {
                console.error("Error al cargar los escultores:", error);
            }
        };

        loadEscultores();
    }, []);

    const getMedalIcon = (index: number) => {
        if (index === 0) return "🥇"; // Oro
        if (index === 1) return "🥈"; // Plata
        if (index === 2) return "🥉"; // Bronce
        return "";
    };

    return (
        <div className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 min-h-screen flex flex-col items-center py-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Ranking de Escultores</h1>
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                <table className="table-auto w-full text-left">
                    <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="px-4 py-3 text-center">#</th>
                        <th className="px-4 py-3">Nombre</th>
                        <th className="px-4 py-3 text-center">Puntuación Total</th>
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
                                <span className="text-gray-800 font-medium">{escultor.nombre}</span>
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
    );
};

export default Ranking;
