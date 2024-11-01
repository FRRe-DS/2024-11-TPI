import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/footer/Footer.tsx';
import Hero from "../layout/hero/Hero.tsx";
import Navbar from "../layout/Navbar/Navbar.tsx";


const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Hero />
            <Header />
            <Footer />
        </div>
    );
};

export default Home;
