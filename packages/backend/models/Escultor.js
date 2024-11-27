const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Escultor = sequelize.define("Escultor", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true, // Relación uno a uno con User
        references: {
            model: "Users",
            key: "id",
        },
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    biografia: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    },
    puntuacionTotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true, // Define si es un escultor activo
    },
}, {
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
});

module.exports = Escultor;