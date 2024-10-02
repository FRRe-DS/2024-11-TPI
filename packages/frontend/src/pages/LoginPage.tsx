// LoginPage.tsx
import React from 'react';
import Navbar from "../components/layout/Navbar.tsx";
import Footer from "../components/layout/Footer.tsx";
import Login from '../components/login/Login.tsx';

const LoginPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />
            <main className="flex-grow flex items-center justify-center bg-gray-100 p-4">
                <Login />
            </main>
            <Footer />
        </div>
    );
};

export default LoginPage;
