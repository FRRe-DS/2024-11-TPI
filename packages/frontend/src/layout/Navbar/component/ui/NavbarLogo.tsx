import logo from '../../assets/images/web-logo-130x50-3.png';

const NavbarLogo = () => {
    return (
        <div className="relative">
            {/* Imagen con gradiente de fondo */}
            <img
                src={logo}
                alt="Logo"
                className="flex items-center gap-3 p-2 rounded-lg w-full h-auto"
                style={{
                    backgroundImage: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradiente de colores
                }}
            />
        </div>
    );
}

export default NavbarLogo;
