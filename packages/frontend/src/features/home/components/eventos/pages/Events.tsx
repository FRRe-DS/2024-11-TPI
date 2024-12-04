import React from 'react';

import EventList from "../components/EventList.tsx";

const Events: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden flex flex-col min-h-screen">
            <EventList />
        </div>
    );
};

export default Events;

