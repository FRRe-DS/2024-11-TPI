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
    fechaInc: {
        type: DataTypes.DATE,  // Campo de fecha de inicio
        allowNull: true,
    },
    fechaFin: {
        type: DataTypes.DATE,  // Campo de fecha de fin
        allowNull: true,
    },
    imagen: {
        type: DataTypes.STRING, // Tipo para almacenar un enlace a la imagen
        allowNull: true,        // Puede ser nulo
    },
}, {
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
});

module.exports = Evento;