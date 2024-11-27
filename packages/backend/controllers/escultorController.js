const { Escultor, Escultura, User } = require("../models");

// Crear un escultor
const crearEscultor = async (req, res) => {
    try {
        const { userId, nombre, biografia, imagen, instagram, facebook, youtube, linkedin } = req.body;

        // Buscar el usuario asociado para obtener datos
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Crear el escultor con datos adicionales del usuario
        const nuevoEscultor = await Escultor.create({
            userId: user.id,
            username: user.username,
            email: user.email,
            nombre: nombre || user.username, // Por defecto, usa el nombre de usuario
            biografia,
            imagen,
            instagram,
            facebook,
            youtube,
            linkedin,
        });

        res.status(201).json({ message: "Escultor creado exitosamente", escultor: nuevoEscultor });
    } catch (error) {
        console.error("Error al crear escultor:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Obtener todos los escultores con sus puntuaciones totales
const obtenerEscultores = async (req, res) => {
    try {
        const escultores = await Escultor.findAll({
            attributes: ["id", "nombre", "puntuacionTotal"], // Incluir la puntuación total
        });
        res.status(200).json({ escultores });
    } catch (error) {
        console.error("Error al obtener escultores:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Obtener un escultor por ID con sus puntuaciones totales y esculturas
const obtenerEscultorPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const escultor = await Escultor.findByPk(id, {
            include: [
                {
                    model: Escultura,
                    as: "esculturas",
                    attributes: ["id", "nombre", "descripcion", "puntuacion"],
                },
            ],
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

// Actualizar un escultor
const actualizarEscultor = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, biografia, imagen, puntuacionTotal, instagram, facebook, youtube, linkedin } = req.body;

        const escultor = await Escultor.findByPk(id);
        if (!escultor) {
            return res.status(404).json({ message: "Escultor no encontrado" });
        }

        await escultor.update({
            nombre,
            biografia,
            imagen,
            puntuacionTotal: puntuacionTotal || escultor.puntuacionTotal, // Mantiene la puntuación actual si no se actualiza
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

// Eliminar un escultor
const eliminarEscultor = async (req, res) => {
    try {
        const { id } = req.params;

        const escultor = await Escultor.findByPk(id);
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