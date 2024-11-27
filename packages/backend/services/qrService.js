const { generateQRCode } = require("../../shared/utils/qrcode");
const { Escultura, Qr } = require("../models");
const crypto = require("crypto");

// Generar un código QR para una escultura
const generateEsculturaQRCode = async (esculturaId) => {
    const escultura = await Escultura.findByPk(esculturaId);
    if (!escultura) {
        throw new Error("Escultura no encontrada");
    }

    // Generar un código único para el QR que expira en 10 minutos
    const expiration = Date.now() + 10 * 60 * 1000; // 10 minutos
    const uniqueCode = crypto.randomBytes(16).toString("hex");

    // Guardar el QR en la base de datos
    const qrRecord = await Qr.create({
        esculturaId,
        uniqueCode,
        expiration: new Date(expiration), // Guardamos la fecha en formato Date
    });

    // Generar el QR visual
    const qrCode = await generateQRCode(JSON.stringify({ uniqueCode }));

    return { qrCode, qrRecord };
};

// Validar el QR escaneado
const validateQRCode = async (qrData) => {
    const { esculturaId, uniqueCode, expiration } = JSON.parse(qrData);

    // Verificar si el código QR ha expirado
    if (Date.now() > expiration) {
        throw new Error("El código QR ha expirado");
    }

    // Verificar la escultura asociada
    const escultura = await Escultura.findByPk(esculturaId);
    if (!escultura) {
        throw { status: 404, message: "Escultura no encontrada" };
    }

    return escultura;
};

module.exports = {
    generateEsculturaQRCode,
    validateQRCode,
};