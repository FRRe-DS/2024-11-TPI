import React, { useState, useEffect } from "react";
import { getEscultores } from "../../../services/escultorService.ts";
import SculptorCardHome from "./ui/SculptorCardHome";

const SculptorListHome: React.FC = () => {
    const [escultores, setEscultores] = useState<any[]>([]);

    useEffect(() => {
        const fetchEscultores = async () => {
            try {
                const data = await getEscultores();
                console.log("Datos recibidos:", data); // Agrega este console.log
                setEscultores(data.escultores || []); // Asegúrate de usar la propiedad correcta
            } catch (error) {
                console.error("Error al obtener los escultores:", error);
            }
        };
        fetchEscultores();
    }, []);


    return (
        <div
            className="relative w-full h-full bg-cover bg-center flex flex-col justify-center items-center"
            style={{
                backgroundImage:
                    "url('https://www.bienaldelchaco.org/2024/wp-content/uploads/2024/03/Fondo-escultores-invitados.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 flex flex-col items-center pt-10 px-4 w-full h-full overflow-y-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 drop-shadow-lg">
                    Escultores Destacados
                </h2>
                {escultores.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {escultores.map((escultor, id) => (
                            <SculptorCardHome key={id} {...escultor} />
                        ))}
                    </div>
                ) : (
                    <p className="text-white text-lg">No hay escultores disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default SculptorListHome;