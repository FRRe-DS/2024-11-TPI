const { Sequelize } = require('sequelize');

// Configura la conexión a MySQL
const sequelize = new Sequelize('bienal', 'bienal', 'bienal', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
