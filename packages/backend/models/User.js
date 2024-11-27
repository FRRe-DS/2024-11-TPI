const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'user', 'escultor'), // Tipos de roles disponibles
        allowNull: false,
        defaultValue: 'user',
    },
    isActive: {
        type: DataTypes.BOOLEAN, // Indica si el usuario está activo
        defaultValue: true,
    },
    expiryDate: {
        type: DataTypes.DATE, // Fecha de expiración opcional
        allowNull: true,
        defaultValue: null,
    },
}, {
    timestamps: true, // Incluye campos `createdAt` y `updatedAt`
    createdAt: 'createdAt', // Nombre personalizado para la columna
    updatedAt: 'updatedAt', // Nombre personalizado para la columna
});

module.exports = User;
