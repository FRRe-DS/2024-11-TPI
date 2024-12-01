// Importamos los tipos necesarios de Sequelize y la configuración de la base de datos.
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Definimos el modelo 'Qr' que representa una tabla 'Qrs' en la base de datos.
const Qr = sequelize.define(
    "Qr", // Nombre del modelo en la aplicación
    {
        // Definimos los campos que tendrá el modelo.

        id: {
            type: DataTypes.INTEGER,  // Tipo de dato: entero
            primaryKey: true,  // Definimos este campo como la clave primaria
            autoIncrement: true,  // Este campo se incrementará automáticamente
        },

        esculturaId: {
            type: DataTypes.INTEGER,  // Tipo de dato: entero
            allowNull: false,  // Este campo no puede ser nulo
            references: {
                model: "Esculturas",  // Establece una relación con la tabla 'Esculturas'
                key: "id",  // Relacionado con la clave primaria de 'Esculturas'
            },
        },

        uniqueCode: {
            type: DataTypes.STRING,  // Tipo de dato: cadena de texto
            allowNull: false,  // Este campo no puede ser nulo
            unique: true,  // Asegura que este campo tenga valores únicos
        },

        expiration: {
            type: DataTypes.DATE,  // Tipo de dato: fecha
            allowNull: false,  // Este campo no puede ser nulo
        },
    },
    {
        tableName: "Qrs",  // Definimos explícitamente el nombre de la tabla como 'Qrs'
        timestamps: true,  // Activamos los campos 'createdAt' y 'updatedAt' automáticamente
    }
);

// Exportamos el modelo para usarlo en otras partes de la aplicación
module.exports = Qr;