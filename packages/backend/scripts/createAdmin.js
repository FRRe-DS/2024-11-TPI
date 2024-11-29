const User = require('../models/User');
const bcrypt = require("bcrypt");

const createAdmin = async () => {
    try {
        // Verificar si el usuario admin ya existe
        const existingUser = await User.findOne({ where: { username: process.env.ADMIN_USERNAME } });
        if (existingUser) {
            console.log('El usuario admin ya existe.');
            return;
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

        // Crear usuario administrador
        const adminUser = await User.create({
            username: process.env.ADMIN_USERNAME,
            email: process.env.ADMIN_EMAIL,
            password: hashedPassword,
            role: 'admin',
        });

        console.log('Usuario admin creado:', adminUser.toJSON());
    } catch (error) {
        console.error('Error al crear el usuario admin:', error);
    }
};

createAdmin();