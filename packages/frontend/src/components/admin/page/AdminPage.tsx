import React, { useState } from 'react';
import Navbar from '../../layout/Navbar.tsx';
import Footer from '../../layout/Footer.tsx';
//import SponsorManagement from './SponsorManagement.tsx';
import Menu from "../admin_components/Menu.tsx";
import Header from "../../layout/Header.tsx";
import EventManagement from "./EventManagement.tsx";

const AdminPage: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<'events' | 'sponsors'>('events');

    return (
        <div>
            <Navbar />
            <h1 className="text-2xl font-bold text-center my-4">Admin Page</h1>

            <Menu
                onSelect={setSelectedOption}
                selectedSection={selectedOption}
            />

            {selectedOption === 'events' ? (
                <EventManagement />
            ) : (
                <Header />
            )}

            <Footer />
        </div>
    );
};

export default AdminPage;
