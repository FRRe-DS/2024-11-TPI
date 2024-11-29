const bcrypt = require('bcrypt');
const { Escultor } = require('../models');

// Middleware para encriptar contraseñas
const hashPassword = async (user) => {
    if (user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }
};

// Middleware para sincronizar el estado de isActive con el modelo Escultor
const syncIsActive = async (user) => {
    if (user.isActive !== undefined) {
        await Escultor.update(
            { isActive: user.isActive },
            { where: { userId: user.id } }
        );
    }
};

// Función genérica para aplicar middlewares en la creación y actualización de usuarios
const processUserData = async (user) => {
    await hashPassword(user);
    await syncIsActive(user);
};

module.exports = {
    processUserData,
    hashPassword,
    syncIsActive,
};
