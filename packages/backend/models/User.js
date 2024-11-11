const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Asegura que jwt esté importado para firmar el token
const { SECRET_KEY } = process.env; // Definir en archivo .env

// Definir el modelo de usuario
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique: true, // Asegura que el nombre de usuario sea único
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false, // La contraseña no puede ser nula
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'), // Solo permite roles válidos
        allowNull: false, // Asegura que siempre haya un rol definido
        defaultValue: 'user', // Asigna 'user' como valor predeterminado
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique: true, // Asegura que el correo electrónico sea único
        validate: {
            isEmail: true, // Valida que el formato sea un email correcto
        },
    },
}, {
    timestamps: true, // Activa las marcas de tiempo
    createdAt: 'created_at', // Renombrar el campo de creación
    updatedAt: 'updated_at', // Renombrar el campo de actualización
});

module.exports = User;