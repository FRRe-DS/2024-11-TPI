const { Escultor, User } = require("../models");

// Crear un escultor
const crearEscultor = async (req, res) => {
    try {
        const { userId, biografia, imagen, instagram, facebook, youtube, linkedin } = req.body;

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const escultor = await Escultor.create({
            userId,
            biografia,
            imagen,
            instagram,
            facebook,
            youtube,
            linkedin,
        });

        res.status(201).json({ message: "Escultor creado exitosamente", escultor });
    } catch (error) {
        console.error("Error al crear escultor:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Obtener todos los escultores
const obtenerEscultores = async (req, res) => {
    try {
        const escultores = await Escultor.findAll({
            include: [{ model: User, attributes: ["username", "email"] }],
        });
        res.status(200).json({ escultores });
    } catch (error) {
        console.error("Error al obtener escultores:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Obtener un escultor por id
const obtenerEscultorPorId = async (req, res) => {
    try {
        const { id } = req.params;

        const escultor = await Escultor.findOne({
            where: { userId: id },
            include: [{ model: User, attributes: ["username", "email"] }],
        });

        if (!escultor) {
            return res.status(404).json({ message: "Escultor no encontrado" });
        }

        res.status(200).json({ escultor });
    } catch (error) {
        console.error("Error al obtener escultor:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Actualizar un escultor por id
const actualizarEscultor = async (req, res) => {
    try {
        const { id } = req.params;
        const { biografia, imagen, puntuacionTotal, instagram, facebook, youtube, linkedin } = req.body;

        const escultor = await Escultor.findOne({ where: { userId: id } });
        if (!escultor) {
            return res.status(404).json({ message: "Escultor no encontrado" });
        }

        await escultor.update({
            biografia,
            imagen,
            puntuacionTotal,
            instagram,
            facebook,
            youtube,
            linkedin,
        });

        res.status(200).json({ message: "Escultor actualizado exitosamente", escultor });
    } catch (error) {
        console.error("Error al actualizar escultor:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Eliminar un escultor por id
const eliminarEscultor = async (req, res) => {
    try {
        const { id } = req.params;

        const escultor = await Escultor.findOne({ where: { userId: id } });
        if (!escultor) {
            return res.status(404).json({ message: "Escultor no encontrado" });
        }

        await escultor.destroy();
        res.status(200).json({ message: "Escultor eliminado exitosamente" });
    } catch (error) {
        console.error("Error al eliminar escultor:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = {
    crearEscultor,
    obtenerEscultores,
    obtenerEscultorPorId,
    actualizarEscultor,
    eliminarEscultor,
};