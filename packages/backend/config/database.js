require('dotenv').config(); // Cargar variables de entorno
const { Sequelize } = require('sequelize');

// Crear instancia de Sequelize
const sequelize = new Sequelize(
    process.env.POSTGRES_DB, // Nombre de la base de datos
    process.env.POSTGRES_USER, // Usuario de la base de datos
    process.env.POSTGRES_PASSWORD, // Contraseña del usuario
    {
        host: process.env.DB_HOST, // Host (solo el hostname)
        port: process.env.DB_PORT, // Puerto (5432 por defecto)
        dialect: 'postgres', // Dialecto de base de datos
        dialectOptions: {
            ssl: {
                require: true, // SSL obligatorio para Render
                rejectUnauthorized: false, // Evita errores con certificados autofirmados
            },
        },
        logging: false, // Desactivar logs de Sequelize
        pool: {
            max: 5, // Máximo de conexiones
            min: 0, // Mínimo de conexiones
            acquire: 30000, // Tiempo máximo de conexión
            idle: 10000, // Tiempo máximo de inactividad
        },
    }
);

// Probar conexión a la base de datos
sequelize.authenticate()
    .then(() => console.log('Conexión a la base de datos establecida con éxito.'))
    .catch((error) => console.error('Error en la conexión a la base de datos:', error));

module.exports = sequelize;