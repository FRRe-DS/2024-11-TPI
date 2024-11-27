const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Escultura = sequelize.define("Escultura", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    plano: {
        type: DataTypes.STRING, // URL de la imagen principal o plano inicial
        allowNull: false,
    },
    imagenes: {
        type: DataTypes.ARRAY(DataTypes.STRING), // Almacena múltiples URLs de imágenes
        allowNull: true,
        defaultValue: [],
    },
    imagenFinal: {
        type: DataTypes.STRING, // URL de la imagen final
        allowNull: true,
    },
    fechaCreacion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    puntuacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0, // Valor inicial de puntuación
    },
}, {
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
});

module.exports = Escultura;