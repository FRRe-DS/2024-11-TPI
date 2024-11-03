const User = require('./models/user');
const bcrypt = require("bcrypt");

const createAdminUser = async () => {
    try {
        // Verificar si el usuario admin ya existe
        const existingUser = await User.findOne({ where: { username: 'admin' } });
        if (existingUser) {
            console.log('El usuario admin ya existe.');
            return;
        }
        const hashedPassword = await bcrypt.hash('admin123', 10);

        // Crear el usuario admin
        const adminUser = await User.create({
            username: 'admin',
            email: 'admin@gmail.com',
            password: hashedPassword, // Esta contraseña será encriptada
            role: 'admin'
        });



        console.log('Usuario admin creado:', adminUser);
    } catch (error) {
        console.error('Error al crear el usuario admin:', error);
    }
};

createAdminUser();
