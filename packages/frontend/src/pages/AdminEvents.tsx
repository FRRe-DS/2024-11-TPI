import React from "react";
import Navbar from "../components/layout/Navbar.tsx";
import Footer from "../components/layout/Footer.tsx";
import CreateActivity from "../components/ui/CreateActivity.tsx";

const AdminEvents: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <CreateActivity />
            <Footer />
        </div>
    );
};

export default AdminEvents;