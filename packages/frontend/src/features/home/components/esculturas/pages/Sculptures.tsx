import React from 'react';

import SculptureList from "../components/SculptureList.tsx"; // Asegúrate de crear este componente

const Sculptures: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden flex flex-col min-h-screen">
            {/* Contenedor con barra de desplazamiento horizontal */}
            <div
                className="flex-1 overflow-x-auto"> {/* Aquí se aplica overflow-x-auto para el desplazamiento horizontal */}
                <SculptureList/>
            </div>
        </div>
    );
};

export default Sculptures;