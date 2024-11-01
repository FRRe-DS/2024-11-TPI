// LoginPage.tsx
import React from 'react';
import Navbar from "../../../layout/Navbar/Navbar.tsx";
import Footer from "../../../layout/footer/Footer.tsx";
import Login from '../components/Login.tsx';
import UserRoleIndicator from "../../../layout/Navbar/component/UserRoleIndicator.tsx";

const LoginPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />
            <UserRoleIndicator />
            <main className="flex-grow flex items-center justify-center bg-gray-100 p-4">
                <Login />
            </main>
            <Footer />
        </div>
    );
};

export default LoginPage;
