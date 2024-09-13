import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar.tsx";
import CreateActivity from "./CreateActivity.tsx";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Hero />
            <Header />
            <CreateActivity />
            <Footer />
        </div>
    );
};

export default Home;
