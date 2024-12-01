import React from 'react';

import Footer from "../../layout/footer/Footer.tsx";
import SculptorList from "./components/SculptorList.tsx";


const Sculptors: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden flex flex-col min-h-screen">

            <SculptorList />
            <Footer />
        </div>
    );
};

export default Sculptors;