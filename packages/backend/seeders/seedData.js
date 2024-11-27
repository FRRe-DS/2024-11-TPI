const sequelize = require('../config/database');
const User = require('../models/User');
const Escultor = require('../models/Escultor');
const Escultura = require('../models/Escultura');
const Evento = require('../models/Evento');

(async () => {
    try {
        // Sincronizar tablas en el orden correcto
        await sequelize.sync({ force: true });

        console.log('Base de datos sincronizada.');

        // Crear datos de ejemplo
        const evento = await Evento.create({
            nombre: 'Bienal del Chaco 2024',
            fechaInicio: '2024-06-01',
            fechaFin: '2024-06-30',
            lugar: 'Chaco, Argentina',
            descripcion: 'Exposición de esculturas de artistas locales e internacionales.',
            tematica: 'Arte Contemporáneo',
        });

        const user = await User.create({
            username: 'admin',
            password: 'admin123',
            role: 'admin',
            email: 'admin@bienal.com',
        });

        const escultor = await Escultor.create({
            userId: user.id,
            nombre: 'Pablo Picasso',
            biografia: 'Famoso escultor de arte moderno.',
            fechaNacimiento: '1881-10-25',
            contacto: 'picasso@arte.com',
        });

        await Escultura.bulkCreate([
            {
                nombre: 'Escultura 1',
                descripcion: 'Descripción de Escultura 1',
                tematica: 'Abstracto',
                eventoId: evento.id,
                escultorId: escultor.id,
                imagen: 'https://example.com/escultura1.jpg',
            },
            {
                nombre: 'Escultura 2',
                descripcion: 'Descripción de Escultura 2',
                tematica: 'Minimalismo',
                eventoId: evento.id,
                escultorId: escultor.id,
                imagen: 'https://example.com/escultura2.jpg',
            },
        ]);

        console.log('Datos de prueba creados exitosamente.');
        process.exit();
    } catch (error) {
        console.error('Error al crear datos de prueba:', error);
        process.exit(1);
    }
})();
