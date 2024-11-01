import RegisterForm from '../components/RegisterForm'; // Asegúrate de la ruta correcta

const RegisterPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600">
            <div className="bg-white rounded-lg shadow-lg p-8 w-96">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Registro de Usuario</h2>
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;