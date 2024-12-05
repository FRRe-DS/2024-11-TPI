import React, { useState, useEffect } from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SculptureList from "../components/SculptureList.tsx";

interface IndexProps {}

function SculptureListMobile() {
    return null;
}

const Index: React.FC<IndexProps> = () => {
    // Estado para verificar si estamos en mobile
    const [isMobile, setIsMobile] = useState<boolean>(false);

    // Actualiza el estado de isMobile en función del tamaño de la ventana
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Cambiar a 768px para tamaños md
        };

        // Inicializar el estado correctamente en el primer renderizado
        handleResize();

        // Agregar un event listener para el redimensionamiento de la ventana
        window.addEventListener("resize", handleResize);

        // Limpiar el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // El hook solo se ejecuta una vez al montar el componente

    // Renderiza el componente adecuado dependiendo del tamaño de la ventana
    return isMobile ? (
        <SculptureListMobile />
    ) : (
        <SculptureList />
    );
};

export default Index;