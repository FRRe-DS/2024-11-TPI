const { Qr, Escultura } = require("../models");
const qrService = require("../services/qrService");

// Generar un QR para una escultura
const generateQr = async (req, res, next) => {
    try {
        const { esculturaId } = req.body;
        const result = await qrService.generateEsculturaQRCode(esculturaId);
        res.status(201).json(result);
    } catch (error) {
        next(error); // Dejar el manejo de errores al middleware.
    }
};

// Validar un QR escaneado
const validateQr = async (req, res) => {
    try {
        const { uniqueCode } = req.params;


        console.log("Buscando en Qr:", uniqueCode);
        const qrRecord = await Qr.findOne({ where: { uniqueCode } });
        console.log("Resultado:", qrRecord);
        if (!qrRecord) {
            return res.status(404).json({ message: "Código QR no encontrado" });
        }

        // Verificar si el QR ha expirado
        if (Date.now() > new Date(qrRecord.expiration)) {
            return res.status(400).json({ message: "El código QR ha expirado" });
        }

        // Retornar la escultura asociada
        const escultura = await Escultura.findByPk(qrRecord.esculturaId);
        if (!escultura) {
            return res.status(404).json({ message: "Escultura no encontrada" });
        }

        res.status(200).json({ message: "Código QR válido", escultura });
    } catch (error) {
        console.error("Error al validar QR:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = {
    generateQr,
    validateQr,
};