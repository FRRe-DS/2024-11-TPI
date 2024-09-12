const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Imagen = sequelize.define('Imagen', {
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    fechaSubida: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Imagen;
