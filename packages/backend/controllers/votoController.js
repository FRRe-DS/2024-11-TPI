const votoService = require("../services/votoService");

// Crear o actualizar un voto
const castVote = async (req, res) => {
    try {
        const { esculturaId } = req.params;
        const { puntuacion, qrCode } = req.body;
        const userId = req.user.id;

        // Validar el QR
        const isQrValid = await votoService.validateQr(qrCode, esculturaId);
        if (!isQrValid) {
            return res.status(400).json({ message: "QR no válido o expirado" });
        }

        // Registrar o actualizar el voto
        const voto = await votoService.createOrUpdateVote(userId, esculturaId, puntuacion);
        res.status(200).json({ message: "Voto registrado exitosamente", voto });
    } catch (error) {
        console.error("Error al registrar el voto:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Eliminar un voto
const deleteVote = async (req, res) => {
    try {
        const { esculturaId } = req.params;
        const userId = req.user.id;

        await votoService.deleteVote(userId, esculturaId);
        res.status(200).json({ message: "Voto eliminado exitosamente" });
    } catch (error) {
        console.error("Error al eliminar el voto:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = { castVote, deleteVote };