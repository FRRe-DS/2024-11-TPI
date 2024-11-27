const { Evento, Escultura } = require("../models");

// Crear un evento
const crearEvento = async (req, res) => {
    try {
        const { nombre, tematica, descripcion } = req.body;

        const nuevoEvento = await Evento.create({
            nombre,
            tematica,
            descripcion,
        });

        res.status(201).json({ message: "Evento creado exitosamente", evento: nuevoEvento });
    } catch (error) {
        console.error("Error al crear evento:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Obtener todos los eventos
const obtenerEventos = async (req, res) => {
    try {
        const eventos = await Evento.findAll({
            include: [
                {
                    model: Escultura,
                    as: "esculturas",
                    attributes: ["id", "nombre"],
                },
            ],
        });
        res.status(200).json({ eventos });
    } catch (error) {
        console.error("Error al obtener eventos:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Obtener un evento por ID
const obtenerEventoPorId = async (req, res) => {
    try {
        const { id } = req.params;

        const evento = await Evento.findByPk(id, {
            include: [
                {
                    model: Escultura,
                    as: "esculturas",
                    attributes: ["id", "nombre", "descripcion"],
                },
            ],
        });

        if (!evento) {
            return res.status(404).json({ message: "Evento no encontrado" });
        }

        res.status(200).json({ evento });
    } catch (error) {
        console.error("Error al obtener evento:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Actualizar un evento
const actualizarEvento = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, tematica, descripcion } = req.body;

        const evento = await Evento.findByPk(id);
        if (!evento) {
            return res.status(404).json({ message: "Evento no encontrado" });
        }

        await evento.update({ nombre, tematica, descripcion });

        res.status(200).json({ message: "Evento actualizado exitosamente", evento });
    } catch (error) {
        console.error("Error al actualizar evento:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Eliminar un evento
const eliminarEvento = async (req, res) => {
    try {
        const { id } = req.params;

        const evento = await Evento.findByPk(id);
        if (!evento) {
            return res.status(404).json({ message: "Evento no encontrado" });
        }

        await evento.destroy();
        res.status(200).json({ message: "Evento eliminado exitosamente" });
    } catch (error) {
        console.error("Error al eliminar evento:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = {
    crearEvento,
    obtenerEventos,
    obtenerEventoPorId,
    actualizarEvento,
    eliminarEvento,
};