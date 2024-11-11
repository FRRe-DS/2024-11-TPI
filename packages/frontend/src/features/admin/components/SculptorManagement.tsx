import React from 'react';
//import EventList from '../event/EventList.tsx';
import SculptorForm from '../../sculptors/SculptorForm.tsx'
import Header from "../../../layout/Header.tsx";

const SculptureManagement: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Manage Sculptor</h2>
            <SculptorForm />
            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Current Sculptors</h3>
                <Header />
            </div>
        </div>
    );
};

export default SculptureManagement;