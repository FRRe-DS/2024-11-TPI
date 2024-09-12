const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bienal', 'bienal', 'bienal', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

module.exports = sequelize;
