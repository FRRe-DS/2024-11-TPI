const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Qr = sequelize.define(
    "Qr",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        esculturaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Esculturas",
                key: "id",
            },
        },
        uniqueCode: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        expiration: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: "Qrs", // Asegura que la tabla sea "Qrs"
        timestamps: true,
    }
);

module.exports = Qr;
