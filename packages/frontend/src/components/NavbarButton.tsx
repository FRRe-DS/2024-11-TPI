import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarButtonProps {
    to: string;
    label: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ to, label }) => {
    return (
        <Link to={to} className="relative inline-block">
            <button className="relative font-semibold text-white cursor-pointer overflow-hidden border-none rounded-full w-32 h-12 z-10">
                {/* Texto con desenfoque y posición en el frente */}
                <span className="absolute inset-0 flex items-center justify-center text-lg bg-[rgba(255,255,255,0.15)] rounded-full z-10 backdrop-blur-lg">
                    {label}
                </span>

                {/* Blobs de fondo */}
                <span className="blob absolute top-0 left-0 w-20 h-12 rounded-full bg-orange-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                <span className="blob absolute top-0 left-7 w-20 h-12 rounded-full bg-purple-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                <span className="blob absolute top-[-1em] left-16 w-20 h-12 rounded-full bg-pink-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
                <span className="blob absolute top-6 left-20 w-20 h-12 rounded-full bg-blue-500 opacity-80 transition-transform duration-300 ease-in-out group-hover:scale-125"></span>
            </button>
        </Link>
    );
};

export default NavbarButton;
