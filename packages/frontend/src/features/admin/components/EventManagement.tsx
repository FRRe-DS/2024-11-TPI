import React from 'react';
//import EventList from '../event/EventList.tsx';
import EventForm from '../../events/EventForm.tsx';
import Header from "../../../layout/Header.tsx";

const EventManagement: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Manage Events</h2>
            <EventForm />
            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Current Events</h3>
                <Header />
            </div>
        </div>
    );
};

export default EventManagement;
