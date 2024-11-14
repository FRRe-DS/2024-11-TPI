const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Evento = require('./Evento');  // Si tu modelo Evento está en esta ruta
const User = require('./User');      // Si tu modelo User está en esta ruta

const Voto = sequelize.define('Voto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    eventoId: {
        type: DataTypes.INTEGER,
        //allowNull: false,
        references: {
            model: Evento,   // Asociar el voto con el evento
            key: 'id'
        }
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        //allowNull: false,
        references: {
            model: User,     // Asociar el voto con el usuario
            key: 'id'
        }
    },
    EsculturaId: {
        type: DataTypes.INTEGER,
        //allowNull: false,
        references: {
            model: User,     // Asociar el voto con el usuario
            key: 'id'
        }
    },
    voto: {
        type: DataTypes.ENUM('Sí', 'No'),  // O lo que sea relevante en tu votación
        //allowNull: false
    },
    fechaInicio: {
        type: DataTypes.DATE,
        //allowNull: false,
    },
    fechaFin: {
        type: DataTypes.DATE,
        //allowNull: false,
    },
}, {
    timestamps: true,  // Para tener un registro de cuándo se votó
    tableName: 'votos',
});

module.exports = Voto;