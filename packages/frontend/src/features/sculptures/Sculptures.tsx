import React from 'react';
import Navbar from "../../layout/Navbar/Navbar.tsx";
import Footer from "../../layout/footer/Footer.tsx";
import SculptureList from "./components/SculptureList.tsx"; // Asegúrate de crear este componente

const Sculptures: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <SculptureList />
            <Footer />
        </div>
    );
};

export default Sculptures;