import React from 'react';
import Footer from "./ui/Footer.tsx";

const Maps: React.FC = () => {
    return (
        // Sección del mapa
        // Usamos 'relative' para que los elementos dentro de la sección se posicionen respecto a este contenedor.
        // 'bg-gray-100' para fondo gris, 'rounded-lg' para bordes redondeados,
        // 'shadow-md' para sombra y 'overflow-hidden' para evitar que el contenido se desborde
        <section className="relative bg-gray-100 rounded-lg shadow-md overflow-hidden lg:h-screen w-screen">

            {/* iframe del mapa de Google */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14164.10854776721!2d-58.98136!3d-27.437265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x891619c21777887b!2sPredio+de+las+Bienales!5e0!3m2!1ses!2sar!4v1543334233591"
                className="w-full h-[calc(102vh-70px)] sm:h-[calc(72vh-80px)]"  // Ajuste del alto según el tamaño de la pantalla, para móviles y PC
                loading="lazy"  // Carga perezosa para mejorar el rendimiento
            ></iframe>

            {/* Footer se encuentra al final de la sección */}
            <Footer/>
        </section>
    );
};

export default Maps;
