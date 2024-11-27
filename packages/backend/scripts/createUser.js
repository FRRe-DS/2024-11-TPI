const bcrypt = require('bcrypt');
const User = require('../models/User'); // Ajusta la ruta según tu estructura

const createUser = async () => {
    try {
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ where: { username: 'manu' } });
        if (existingUser) {
            console.log('El usuario ya existe.');
            return;
        }

        // Encriptar la contraseña antes de crear el usuario
        const hashedPassword = await bcrypt.hash('manu', 10); // Reemplaza 'sol' con la contraseña deseada

        // Crear el usuario estándar
        const standardUser = await User.create({
            username: 'manu',
            password: hashedPassword,
            email: 'manu@gmail.com',
            role: 'user'
        });

        console.log('Usuario estándar creado:', standardUser);
    } catch (error) {
        console.error('Error al crear el usuario estándar:', error);
    }
};

createUser();