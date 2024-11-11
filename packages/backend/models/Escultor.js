const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Escultor = sequelize.define('Escultor', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    biografia: {
        type: DataTypes.TEXT,
    },
    fechaNacimiento: {
        type: DataTypes.DATE,
    },
    fechaFallecimiento: {
        type: DataTypes.DATE,
    },
});

module.exports = Escultor;
