const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Voto = sequelize.define(
    "Voto",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        puntuacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
            },
        },
    },
    {
        tableName: "Votos", // Asegura que la tabla sea "Votos"
        timestamps: true,
    }
);

module.exports = Voto;