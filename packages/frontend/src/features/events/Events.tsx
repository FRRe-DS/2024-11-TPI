import React from 'react';
import Navbar from "../../layout/Navbar/Navbar.tsx";
import Header from "../../layout/Header.tsx";
import Footer from "../../layout/footer/Footer.tsx";
import EventList from "./components/EventList.tsx";

const Events: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <EventList />
            <Header />
            <Footer />
        </div>
    );
};

export default Events;

