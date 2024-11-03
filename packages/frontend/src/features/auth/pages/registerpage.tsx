import RegisterForm from '../components/RegisterForm';
import Footer from "../../../layout/footer/Footer.tsx";
import Navbar from "../../../layout/Navbar/Navbar.tsx";

const RegisterPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg"> {/* Aumenta el ancho máximo */}
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Registro de Usuario</h2>
                    <RegisterForm />
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default RegisterPage;