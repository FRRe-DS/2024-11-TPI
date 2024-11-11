import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/footer/Footer.tsx';
import Hero from "../layout/hero/Hero.tsx";
import Navbar from "../layout/Navbar/Navbar.tsx";
import Maps from '../layout/maps/Maps.tsx';


const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Hero />
            <Header />
            <Maps />
            <Footer />
        </div>
    );
};

export default Home;
