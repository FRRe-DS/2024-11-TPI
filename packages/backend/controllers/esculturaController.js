const { Escultura, Escultor, Evento } = require("../models");

// Crear una escultura
const crearEscultura = async (req, res) => {
    try {
        const { nombre, descripcion, plano, imagenes, imagenFinal, fechaCreacion, escultorId, eventoId } = req.body;

        const nuevaEscultura = await Escultura.create({
            nombre,
            descripcion,
            plano,
            imagenes,
            imagenFinal,
            fechaCreacion,
            escultorId,
            eventoId,
        });

        res.status(201).json({ message: "Escultura creada exitosamente", escultura: nuevaEscultura });
    } catch (error) {
        console.error("Error al crear escultura:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Obtener todas las esculturas
const obtenerEsculturas = async (req, res) => {
    try {
        const esculturas = await Escultura.findAll({
            include: [
                { model: Escultor, as: "escultor", attributes: ["id", "nombre"] },
                { model: Evento, as: "evento", attributes: ["id", "nombre", "tematica"] },
            ],
        });
        res.status(200).json({ esculturas });
    } catch (error) {
        console.error("Error al obtener esculturas:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Obtener una escultura por ID
const obtenerEsculturaPorId = async (req, res) => {
    try {
        const { id } = req.params;

        const escultura = await Escultura.findByPk(id, {
            include: [
                { model: Escultor, as: "escultor", attributes: ["id", "nombre"] },
                { model: Evento, as: "evento", attributes: ["id", "nombre", "tematica"] },
            ],
        });

        if (!escultura) {
            return res.status(404).json({ message: "Escultura no encontrada" });
        }

        res.status(200).json({ escultura });
    } catch (error) {
        console.error("Error al obtener escultura:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Actualizar una escultura
const actualizarEscultura = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, plano, imagenes, imagenFinal, fechaCreacion, escultorId, eventoId } = req.body;

        const escultura = await Escultura.findByPk(id);
        if (!escultura) {
            return res.status(404).json({ message: "Escultura no encontrada" });
        }

        await escultura.update({
            nombre,
            descripcion,
            plano,
            imagenes,
            imagenFinal,
            fechaCreacion,
            escultorId,
            eventoId,
        });

        res.status(200).json({ message: "Escultura actualizada exitosamente", escultura });
    } catch (error) {
        console.error("Error al actualizar escultura:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Eliminar una escultura
const eliminarEscultura = async (req, res) => {
    try {
        const { id } = req.params;

        const escultura = await Escultura.findByPk(id);
        if (!escultura) {
            return res.status(404).json({ message: "Escultura no encontrada" });
        }

        await escultura.destroy();
        res.status(200).json({ message: "Escultura eliminada exitosamente" });
    } catch (error) {
        console.error("Error al eliminar escultura:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = {
    crearEscultura,
    obtenerEsculturas,
    obtenerEsculturaPorId,
    actualizarEscultura,
    eliminarEscultura,
};
