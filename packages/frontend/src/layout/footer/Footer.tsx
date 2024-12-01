import logo from "./assets/images/B22-Slide-web-footer-v4.fw_.png";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer
            // Estilo de fondo fijo para el pie de página
            className="fixed bottom-0 left-0 w-full bg-cover bg-center text-white"
            style={{
                // Fondo dinámico con una URL externa
                backgroundImage: `url('https://plus.unsplash.com/premium_photo-1719864933065-6639a2d32e56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                backgroundPosition: 'center -390px', // Ajuste de la posición del fondo
            }}
        >
            {/* Contenedor principal para la disposición */}
            <div className="flex justify-between items-center px-10 py-6 sm:px-5 sm:py-4 md:px-6 md:py-5">
                {/* Logo a la izquierda */}
                <div className="flex justify-start items-center">
                    <img src={logo} alt="Logo" className="h-[116px] object-contain"/>
                </div>

                {/* Navegación de enlaces a la derecha */}
                <div className="flex flex-col justify-center items-end gap-4">
                    {/* Iconos de redes sociales */}
                    <div className="flex justify-end gap-6 mt-6">
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
                        <a href="https://www.instagram.com/bienaldelchaco/" target="_blank" rel="noopener noreferrer"
                           className="relative">
                            <i className="fab fa-instagram text-2xl hover:text-white transition-colors"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Información de derechos de autor */}
            <div className="text-center mt-6">
                <p className="text-sm opacity-80">
                    Copyright © {new Date().getFullYear()} - All rights reserved by Bienal Internacional de Escultura
                    del Chaco
                </p>
            </div>
        </footer>
    );
};

export default Footer;
