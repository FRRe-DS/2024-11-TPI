import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar.tsx";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar_domain */}
            <Navbar />
            <Hero />
            {/* Header */}
            <Header />

            {/* Main content */}
            <main className="flex-grow bg-gray-100 p-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800">
                    Bienvenido a la Bienal Internacional de Escultura del Chaco
                </h2>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl text-center text-gray-600">
                    Explora los eventos, escultores y obras presentadas en esta edición.
                </p>
                {/* Contenido adicional de la página de inicio */}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
