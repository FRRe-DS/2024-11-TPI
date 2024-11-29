import RegisterForm from '../components/RegisterForm';
import Footer from "../../../layout/footer/Footer.tsx";


const RegisterPage = () => {
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-grow flex items-center justify-center bg-gray-100 p-7">
                <RegisterForm/>
            </main>
            <Footer/>
        </div>
);
};

export default RegisterPage;