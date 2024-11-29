const bcrypt = require("bcryptjs");
const { User, Escultor } = require("../models");

const createEscultor = async () => {
    try {
        // Datos configurables para el escultor
        const nombre = "Escultor Ejemplo";
        const username = "escultor1"; // Nombre de usuario
        const email = "escultor1@gmail.com"; // Correo electrónico
        const password = "escultor123"; // Contraseña
        const role = "escultor"; // Rol fijo para escultores

        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            console.log("El usuario escultor ya existe en la base de datos.");
            return;
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el usuario
        const newUser = await User.create({
            nombre,
            username,
            email,
            password: hashedPassword,
            role,
        });

        // Crear el perfil del escultor asociado
        const newEscultor = await Escultor.create({
            userId: newUser.id, // Relacionar con el ID del usuario creado
            nombre: "Escultor Ejemplo",
            biografia: "Este es un escultor de prueba.",
            imagen: "https://example.com/imagen-defecto.png",
            puntuacionTotal: 0, // Puntuación inicial
            instagram: "https://instagram.com/escultor1",
            facebook: "https://facebook.com/escultor1",
            youtube: "https://youtube.com/escultor1",
            linkedin: "https://linkedin.com/in/escultor1",
        });

        console.log("Usuario escultor creado exitosamente:");
        console.log("Usuario:", newUser.toJSON());
        console.log("Perfil del escultor:", newEscultor.toJSON());
    } catch (error) {
        console.error("Error al crear el usuario y escultor:", error);
    }
};

createEscultor();