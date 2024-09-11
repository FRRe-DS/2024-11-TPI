import React from 'react';
// @ts-ignore
import logo from "../../assets/footer/images/B22-Slide-web-footer-v4.fw_.png";

const Footer: React.FC = () => {
    return (
        <footer className="footer footer-center bg-gray-100 text-base-content rounded p-10">
            {/* Navegación principal */}
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            {/* Iconos de redes sociales */}
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://twitter.com/bienaldelchaco" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.youtube.com/BienaldelChaco" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://www.facebook.com/bienaldelchaco" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/bienaldelchaco/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </nav>
            <aside>
                <img src={logo} alt="Logo" className="h-100"/>
            </aside>
            {/* Información de derechos de autor */}
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All rights reserved by Bienal Internacional de Escultura del Chaco</p>
            </aside>
        </footer>
    );
};

export default Footer;
