const sequelize = require("../config/database");
const User = require("./User");
const Escultor = require("./Escultor");
const Escultura = require("./Escultura");
const Evento = require("./Evento");
const Qr = require("./Qr");
const Voto = require("./Voto");

// Relaciones
User.hasOne(Escultor, { foreignKey: 'userId', as: 'perfil' });
Escultor.belongsTo(User, { foreignKey: 'userId', as: 'usuario' });

Escultor.hasMany(Escultura, { foreignKey: 'userId', as: "esculturas" });
Escultura.belongsTo(Escultor, { foreignKey: 'userId', as: "escultor" });

Evento.hasMany(Escultura, { foreignKey: "eventoId", as: "esculturas" });
Escultura.belongsTo(Evento, { foreignKey: "eventoId", as: "evento" });

User.hasMany(Voto, { foreignKey: "userId", as: "votos" });
Voto.belongsTo(User, { foreignKey: "userId", as: "usuario" });

Escultura.hasMany(Voto, { foreignKey: "esculturaId", as: "votos" });
Voto.belongsTo(Escultura, { foreignKey: "esculturaId", as: "escultura" });

Escultor.hasMany(Voto, { foreignKey: "escultorId", as: "votosEscultor" });
Voto.belongsTo(Escultor, { foreignKey: "escultorId", as: "escultor" });

module.exports = { Voto, Qr, sequelize, User, Escultor, Escultura, Evento };
