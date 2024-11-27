const { Qr } = require("../models");
const fs = require("fs");

const cleanExpiredQr = async () => {
    try {
        const now = new Date();
        const expiredQrs = await Qr.findAll({
            where: { expiration: { [Op.lt]: now } },
        });

        if (expiredQrs.length > 0) {
            fs.appendFileSync(
                "./logs/expired_qrs.log",
                JSON.stringify(expiredQrs, null, 2)
            );
        }

        const result = await Qr.destroy({
            where: { expiration: { [Op.lt]: now } },
        });

        console.log(`Tarea completada: ${result} códigos QR expirados eliminados.`);
    } catch (error) {
        console.error("Error al limpiar códigos QR expirados:", error);
    }
};

module.exports = cleanExpiredQr;