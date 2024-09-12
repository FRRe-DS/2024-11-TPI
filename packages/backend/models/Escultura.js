const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Escultura = sequelize.define('Escultura', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
    },
    fechaCreacion: {
        type: DataTypes.DATE,
    },
    tematica: {
        type: DataTypes.STRING,
    },
});

module.exports = Escultura;
