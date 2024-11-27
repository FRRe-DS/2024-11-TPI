const { User } = require("../models");
const { Op } = require("sequelize");

const deactivateExpiredUsers = async () => {
    try {
        const now = new Date();

        // Buscar y desactivar usuarios cuya fecha de expiración ha pasado
        const result = await User.update(
            { isActive: false }, // Actualizar `isActive` a `false`
            {
                where: {
                    expiryDate: {
                        [Op.lt]: now, // Fecha de expiración menor a ahora
                    },
                    isActive: true, // Solo desactivar usuarios activos
                },
            }
        );

        console.log(`Tarea completada: ${result[0]} usuarios expirados desactivados.`);
    } catch (error) {
        console.error("Error al desactivar usuarios expirados:", error);
    }
};

module.exports = deactivateExpiredUsers;