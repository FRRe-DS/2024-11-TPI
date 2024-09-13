const User = require('./models/user');

const createAdminUser = async () => {
    try {
        // Verificar si el usuario admin ya existe
        const existingUser = await User.findOne({ where: { username: 'admin' } });
        if (existingUser) {
            console.log('El usuario admin ya existe.');
            return;
        }

        // Crear el usuario admin
        const adminUser = await User.create({
            username: 'admin',
            password: 'admin123', // Esta contraseña será encriptada
            role: 'admin'
        });

        console.log('Usuario admin creado:', adminUser);
    } catch (error) {
        console.error('Error al crear el usuario admin:', error);
    }
};

createAdminUser();
