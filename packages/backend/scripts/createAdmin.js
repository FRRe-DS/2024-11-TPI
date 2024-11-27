const User = require('../models/User');
const bcrypt = require("bcrypt");

const createAdmin = async () => {
    try {
        // Verificar si el usuario admin ya existe
        const existingUser = await User.findOne({ where: { username: 'admin' } });
        if (existingUser) {
            console.log('El usuario admin ya existe.');
            return;
        }
        const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

        const adminUser = await User.create({
            username: process.env.ADMIN_USERNAME,
            email: process.env.ADMIN_EMAIL,
            password: hashedPassword,
            role: 'admin',
        });

        console.log('Usuario admin creado:', adminUser);
    } catch (error) {
        console.error('Error al crear el usuario admin:', error);
    }
};

createAdmin();
