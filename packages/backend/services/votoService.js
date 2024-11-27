const { Voto, Escultura, Escultor, Qr } = require("../models");

// Validar un QR
const validateQr = async (qrCode, esculturaId) => {
    const qrRecord = await Qr.findOne({ where: { uniqueCode: qrCode } });
    if (!qrRecord || qrRecord.esculturaId !== parseInt(esculturaId)) {
        return false;
    }
    return Date.now() <= new Date(qrRecord.expiration);
};

// Crear o actualizar un voto
const createOrUpdateVote = async (userId, esculturaId, puntuacion) => {
    const existingVote = await Voto.findOne({ where: { userId, esculturaId } });

    if (existingVote) {
        // Actualizar el voto existente
        const difference = puntuacion - existingVote.puntuacion;
        await existingVote.update({ puntuacion });

        // Actualizar puntuaciones
        await updateScores(esculturaId, difference);
        return existingVote;
    } else {
        // Crear un nuevo voto
        const voto = await Voto.create({ userId, esculturaId, puntuacion });

        // Actualizar puntuaciones
        await updateScores(esculturaId, puntuacion);
        return voto;
    }
};

// Eliminar un voto
const deleteVote = async (userId, esculturaId) => {
    const existingVote = await Voto.findOne({ where: { userId, esculturaId } });
    if (!existingVote) {
        throw new Error("Voto no encontrado");
    }

    // Restar la puntuación del voto eliminado
    await updateScores(esculturaId, -existingVote.puntuacion);
    await existingVote.destroy();
};

// Actualizar puntuaciones
const updateScores = async (esculturaId, puntuacionDifference) => {
    const escultura = await Escultura.findByPk(esculturaId);
    if (!escultura) {
        throw new Error("Escultura no encontrada");
    }

    // Aquí debe actualizar la puntuación de la escultura
    await escultura.increment("puntuacion", { by: puntuacionDifference });

    const escultor = await Escultor.findByPk(escultura.escultorId);
    if (escultor) {
        // Aquí debe actualizar la puntuación total del escultor
        await escultor.increment("puntuacionTotal", { by: puntuacionDifference });
    }
};

module.exports = { validateQr, createOrUpdateVote, deleteVote };