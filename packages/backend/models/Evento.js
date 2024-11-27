const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Evento = sequelize.define("Evento", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tematica: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
});

module.exports = Evento;