const bcrypt = require('bcrypt');
const User = require('../models/User'); // Ajusta la ruta según tu estructura

const createUsers = async () => {
    try {
        // Datos de los usuarios
        const users = [
            {
                nombre: 'Malena',
                username: 'karin',
                password: 'karin', // Cambiar por una contraseña segura
                email: 'karin@gmail.com',
                role: 'user',
            },
            {
                nombre: 'Manuel',
                username: 'manu',
                password: 'manu', // Cambiar por una contraseña segura
                email: 'manu@gmail.com',
                role: 'user',
            },
            {
                nombre: 'Zaira',
                username: 'zai',
                password: 'zai', // Cambiar por una contraseña segura
                email: 'zai@gmail.com',
                role: 'user',
            },
            {
                nombre: 'Amilcar',
                username: 'amil',
                password: 'amil', // Cambiar por una contraseña segura
                email: 'amil@gmail.com',
                role: 'user',
            },
            {
                nombre: 'Santiago',
                username: 'santi',
                password: 'santi', // Cambiar por una contraseña segura
                email: 'santi@gmail.com',
                role: 'user',
            },
            {
                nombre: 'Sol',
                username: 'sol',
                password: 'sol', // Cambiar por una contraseña segura
                email: 'sol@gmail.com',
                role: 'user',
            },
        ];

        for (const userData of users) {
            // Verificar si el usuario ya existe
            const existingUser = await User.findOne({ where: { username: userData.username } });
            if (existingUser) {
                console.log(`El usuario ${userData.username} ya existe.`);
                continue;
            }

            // Encriptar la contraseña
            const hashedPassword = await bcrypt.hash(userData.password, 10);

            // Crear el usuario
            const newUser = await User.create({
                ...userData,
                password: hashedPassword, // Usar la contraseña encriptada
            });

            console.log('Usuario creado:', newUser.toJSON());
        }
    } catch (error) {
        console.error('Error al crear los usuarios:', error);
    }
};

createUsers();
