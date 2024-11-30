import { useState, useEffect } from 'react';
import { fetchEscultoresConNombre } from '../../services/escultorService.ts'; // Asegúrate de que la ruta sea correcta

const Ranking = () => {
    const [escultores, setEscultores] = useState<any[]>([]);

    useEffect(() => {
        const loadEscultores = async () => {
            try {
                const data = await fetchEscultoresConNombre();
                // Ordenar los escultores por puntuación total en orden descendente
                const sortedEscultores = data.sort((a, b) => b.puntuacionTotal - a.puntuacionTotal);
                setEscultores(sortedEscultores);
            } catch (error) {
                console.error("Error al cargar los escultores:", error);
            }
        };

        loadEscultores();
    }, []); // Solo se ejecuta una vez cuando el componente se monta

    return (
        <div>
            <h1>Ranking de Escultores</h1>
            <table className="table-auto border-collapse w-full">
                <thead>
                <tr>
                    <th className="border px-4 py-2">#</th>
                    <th className="border px-4 py-2">Nombre</th>
                    <th className="border px-4 py-2">Puntuación Total</th>
                </tr>
                </thead>
                <tbody>
                {escultores.map((escultor, index) => (
                    <tr key={escultor.userId}>
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2">{escultor.nombre}</td>
                        <td className="border px-4 py-2">{escultor.puntuacionTotal}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Ranking;