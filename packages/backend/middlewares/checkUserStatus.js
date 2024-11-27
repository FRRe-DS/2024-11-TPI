const { User } = require("../models"); // Importar el modelo de usuario

const checkUserStatus = async (req, res, next) => {
    try {
        const userId = req.user.id; // Se asume que el usuario ya fue autenticado y `req.user` existe
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Verificar si el usuario está activo
        if (!user.isActive) {
            return res.status(403).json({ message: "Usuario inactivo" });
        }

        // Verificar si el usuario ha expirado
        if (user.expiryDate && new Date() > new Date(user.expiryDate)) {
            return res.status(403).json({ message: "Usuario expirado" });
        }

        // Si todo está bien, continuar con la solicitud
        next();
    } catch (error) {
        console.error("Error verificando el estado del usuario:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = checkUserStatus;