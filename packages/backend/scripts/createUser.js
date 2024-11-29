const bcrypt = require('bcrypt');
const User = require('../models/User'); // Ajusta la ruta según tu estructura

const createUser = async () => {
    try {
        const username = 'karin'; // Puedes cambiar esto o hacerlo dinámico
        const password = 'karin'; // Cambiar por una contraseña segura
        const email = 'karin@gmail.com';

        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            console.log('El usuario ya existe.');
            return;
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el usuario estándar
        const standardUser = await User.create({
            username,
            password: hashedPassword,
            email,
            role: 'user',
        });

        console.log('Usuario estándar creado:', standardUser.toJSON());
    } catch (error) {
        console.error('Error al crear el usuario estándar:', error);
    }
};

createUser();