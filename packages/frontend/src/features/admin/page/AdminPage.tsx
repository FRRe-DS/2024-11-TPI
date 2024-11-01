import React, {useEffect, useState} from 'react';
import Navbar from '../../../layout/Navbar/Navbar.tsx';
import Footer from '../../../layout/footer/Footer.tsx';
//import SponsorManagement from './SponsorManagement.tsx';
import Menu from "../components/Menu.tsx";
import Header from "../../../layout/Header.tsx";
import EventManagement from "../components/EventManagement.tsx";
import useAuth from '../../auth/hooks/useAuth.ts';

const AdminPage: React.FC = () => {
    const { fetchUser } = useAuth(); // Use the useAuth hook here

    const [selectedOption, setSelectedOption] = useState<'events' | 'sponsors'>('events');

    useEffect(() => {
        fetchUser(); // Call the function when the component mounts
    }, [fetchUser]); // Add fetchUser to the dependencies array

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
