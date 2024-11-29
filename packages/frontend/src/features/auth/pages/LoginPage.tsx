// LoginPage.tsx
import React from 'react';

import Footer from "../../../layout/footer/Footer.tsx";
import Login from '../components/Login.tsx';
import UserRoleIndicator from "../../../layout/Navbar/component/ui/UserRoleIndicator.tsx";

const LoginPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">

            <UserRoleIndicator />
            <main className="flex-grow flex items-center justify-center bg-gray-100 p-7">
                <Login />
            </main>
            <Footer />
        </div>
    );
};

export default LoginPage;
