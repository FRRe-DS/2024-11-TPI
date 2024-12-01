import React from 'react';

import Footer from "../../layout/footer/Footer.tsx";
import EventList from "./components/EventList.tsx";

const Events: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden flex flex-col min-h-screen">

            <EventList />
            <Footer />
        </div>
    );
};

export default Events;

