import React from 'react';
import Navbar from "../../layout/Navbar/Navbar.tsx";
import Header from "../../layout/Header.tsx";
import Footer from "../../layout/footer/Footer.tsx";




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