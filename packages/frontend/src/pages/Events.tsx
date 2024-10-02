import React from 'react';
import Navbar from "../components/layout/Navbar.tsx";
import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";




const Events: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Header />
            <Footer />
        </div>
    );
};

export default Events;