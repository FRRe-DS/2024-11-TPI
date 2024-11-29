import React from 'react';

import Footer from "../../layout/footer/Footer.tsx";
import SculptorList from "./components/SculptorList.tsx"; // Asegúrate de crear este componente

const Sculptors: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">

            <SculptorList />
            <Footer />
        </div>
    );
};

export default Sculptors;