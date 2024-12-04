import React from 'react';

import SculptureList from "../components/SculptureList.tsx"; // Asegúrate de crear este componente

const Sculptures: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden flex flex-col min-h-screen">
            <SculptureList />
        </div>
    );
};

export default Sculptures;