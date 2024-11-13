import Footer from "../../../layout/footer/Footer.tsx";
import { useEffect, useState } from "react";
import Navbar from "../../../layout/Navbar/Navbar.tsx";
import Menu from "../components/Menu.tsx";
import EventManagement from "../components/EventManagement.tsx";
import SculptorManagement from "../components/SculptorManagement.tsx";
import useAuth from "../../auth/hooks/useAuth.ts";
import SculptureManagement from "../components/SculptureManagement.tsx";

const AdminPage: React.FC = () => {
    const { fetchUser } = useAuth();
    const [selectedOption, setSelectedOption] = useState<'events' | 'sculptures' | 'sculptors'>('events');

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return (
        <div className="relative min-h-screen">
            <div className="relative min-h-screen">
                {/* Video de fondo */}
                <div className="absolute inset-0 overflow-hidden -z-10">
                    <video
                        src="https://www.bienaldelchaco.org/2024/wp-content/uploads/2024/05/B24-web-slide-institucional-nuevo-c.mp4"
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    />
                </div>

                <Navbar/>
                <Menu onSelect={setSelectedOption} selectedSection={selectedOption}/>
                {selectedOption === 'events' && <EventManagement/>}
                {selectedOption === 'sculptures' && <SculptureManagement/>}
                {selectedOption === 'sculptors' && <SculptorManagement/>}

            </div>
            <Footer/>
        </div>
    );
};

export default AdminPage;