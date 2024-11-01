const bcrypt = require('bcrypt');
const User = require('./models/user');

const createStandardUser = async () => {
    try {
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ where: { username: 'sol' } });
        if (existingUser) {
            console.log('El usuario ya existe.');
            return;
        }

        // Encriptar la contraseña antes de crear el usuario
        const hashedPassword = await bcrypt.hash('sol', 10); // Reemplaza 'sol' con la contraseña deseada

        // Crear el usuario estándar
        const standardUser = await User.create({
            username: 'sol',
            password: hashedPassword,
            email: 'sol@gmail.com',
            role: 'user'
        });

        console.log('Usuario estándar creado:', standardUser);
    } catch (error) {
        console.error('Error al crear el usuario estándar:', error);
    }
};

createStandardUser();