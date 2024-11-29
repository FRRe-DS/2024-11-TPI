const { User } = require("../models");

const userCache = new Map(); // Cache temporal para almacenar usuarios

const checkUserStatus = async (req, res, next) => {
    try {
        const userId = req.user.id;

        // Verificar si el usuario ya está en el cache
        if (userCache.has(userId)) {
            const cachedUser = userCache.get(userId);

            if (!cachedUser.isActive) {
                return res.status(403).json({ message: "Usuario inactivo" });
            }

            if (cachedUser.expiryDate && new Date() > new Date(cachedUser.expiryDate)) {
                return res.status(403).json({ message: "Usuario expirado" });
            }

            // Usuario validado desde el cache
            return next();
        }

        // Si no está en el cache, buscar en la base de datos
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Agregar al cache con un tiempo de vida limitado
        userCache.set(userId, {
            isActive: user.isActive,
            expiryDate: user.expiryDate,
        });
        setTimeout(() => userCache.delete(userId), 60000); // Tiempo de vida: 60 segundos

        if (!user.isActive) {
            return res.status(403).json({ message: "Usuario inactivo" });
        }

        if (user.expiryDate && new Date() > new Date(user.expiryDate)) {
            return res.status(403).json({ message: "Usuario expirado" });
        }

        next();
    } catch (error) {
        console.error("Error verificando el estado del usuario:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = checkUserStatus;