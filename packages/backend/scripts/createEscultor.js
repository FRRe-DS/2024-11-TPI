const bcrypt = require("bcryptjs");
const { User, Escultor } = require("../models");

const createEscultor = async () => {
    try {
        // Datos del escultor
        const username = "escultor1";
        const email = "escultor1@gmail.com";
        const password = "escultor123";
        const role = "escultor";

        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            console.log("El usuario escultor ya existe.");
            return;
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el usuario
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            role,
        });

        // Crear el perfil del escultor
        const newEscultor = await Escultor.create({
            nombre: "Escultor Ejemplo",
            biografia: "Este es un escultor de prueba.",
            userId: newUser.id, // Relacionar con el usuario creado
        });

        console.log("Usuario escultor creado:", newUser);
        console.log("Perfil del escultor creado:", newEscultor);
    } catch (error) {
        console.error("Error al crear el escultor:", error);
    }
};

createEscultor();
