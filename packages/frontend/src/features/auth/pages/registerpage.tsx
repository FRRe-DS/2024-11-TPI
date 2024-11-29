import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-grow flex items-center justify-center bg-gray-100 p-7">
                <RegisterForm/>
            </main>
        </div>
);
};

export default RegisterPage;