import React from 'react';

import Footer from "../../layout/footer/Footer.tsx";
import SculptureList from "./components/SculptureList.tsx"; // Asegúrate de crear este componente

const Sculptures: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">

            <SculptureList />
            <Footer />
        </div>
    );
};

export default Sculptures;