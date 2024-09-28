import React from "react";
import Navbar from "../components/layout/Navbar.tsx";
import Footer from "../components/layout/Footer.tsx";

const AdminPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <Footer />
        </div>
    );
};

export default AdminPage;