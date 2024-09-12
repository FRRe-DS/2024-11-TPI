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
    fecha_nacimiento: {
        type: DataTypes.DATE,
    },
    fecha_fallecimiento: {
        type: DataTypes.DATE,
    },
});

module.exports = Escultor;
