import React from 'react';
import logo from "../../../assets/images/B22-Slide-web-footer-v4.fw_.png";

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
            <footer
                className="fixed bottom-0 left-0 w-full bg-cover bg-center text-white"
                style={{
                    backgroundImage: `url('https://plus.unsplash.com/premium_photo-1719864933065-6639a2d32e56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                }}
            >
                <div
                    className="flex flex-col-reverse sm:flex-row justify-between items-center px-4 py-4 sm:px-5 sm:py-8 md:px-6 md:py-24">
                    {/* Redes sociales */}
                    <div className="flex flex-col justify-center items-end gap-4">
                        <div className="flex justify-end gap-6 mt-6">
                            {/* Enlaces a redes sociales */}
                            <a href="https://twitter.com/bienaldelchaco" target="_blank" rel="noopener noreferrer"
                               className="relative">
                                <i className="fab fa-twitter text-2xl hover:text-white transition-colors"></i>
                            </a>
                            <a href="https://www.youtube.com/BienaldelChaco" target="_blank" rel="noopener noreferrer"
                               className="relative">
                                <i className="fab fa-youtube text-2xl hover:text-white transition-colors"></i>
                            </a>
                            <a href="https://www.facebook.com/bienaldelchaco" target="_blank" rel="noopener noreferrer"
                               className="relative">
                                <i className="fab fa-facebook-f text-2xl hover:text-white transition-colors"></i>
                            </a>
                            <a href="https://www.instagram.com/bienaldelchaco/" target="_blank"
                               rel="noopener noreferrer"
                               className="relative">
                                <i className="fab fa-instagram text-2xl hover:text-white transition-colors"></i>
                            </a>
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="flex justify-start items-center">
                        <img src={logo} alt="Logo"
                             className="h-16 sm:h-[116px] object-contain"/> {/* Logo más pequeño en móvil */}
                    </div>
                </div>

                {/* Derechos de autor */}
                <div className="text-center mt-6">
                    <p className="text-sm opacity-80">
                        Copyright © {new Date().getFullYear()} - All rights reserved by Bienal Internacional de
                        Escultura
                        del Chaco
                    </p>
                </div>
            </footer>
        </section>
    );
};

export default Maps;
