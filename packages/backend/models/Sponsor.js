const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajusta la ruta según tu estructura

const Sponsor = sequelize.define('Sponsor', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Agrega otros campos si es necesario, como logo, url, etc.
});

module.exports = Sponsor;
