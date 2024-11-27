const { User } = require("../models");
const { Op } = require("sequelize");

const deleteExpiredUsers = async () => {
    try {
        const now = new Date();

        // Eliminar usuarios cuya fecha de expiración ha pasado y están inactivos
        const result = await User.destroy({
            where: {
                expiryDate: {
                    [Op.lt]: now, // Fecha de expiración menor a ahora
                },
                isActive: false, // Solo eliminar usuarios ya desactivados
            },
        });

        console.log(`Tarea completada: ${result} usuarios expirados eliminados.`);
    } catch (error) {
        console.error("Error al eliminar usuarios expirados:", error);
    }
};

module.exports = deleteExpiredUsers;