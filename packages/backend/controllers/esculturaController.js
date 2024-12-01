const { Escultura, Escultor, Evento } = require("../models");

// Crear una escultura
const crearEscultura = async (req, res) => {
    try {
        // Desestructurar los datos recibidos en el cuerpo de la solicitud
        const { nombre, descripcion, plano, imagenes, imagenFinal, fechaCreacion, usuarioId, eventoId } = req.body;

        // Verificar que usuarioId y eventoId son válidos
        if (!usuarioId || !eventoId) {
            return res.status(400).json({ message: "Se debe proporcionar un usuarioId y un eventoId válidos." });
        }

        // Crear nueva escultura en la base de datos
        const nuevaEscultura = await Escultura.create({
            nombre,
            descripcion,
            plano,
            imagenes,
            imagenFinal,
            fechaCreacion,
            userId: usuarioId, // Usamos userId en lugar de escultorId
            eventoId,
        });

        // Responder con éxito y la nueva escultura creada
        res.status(201).json({ message: "Escultura creada exitosamente", escultura: nuevaEscultura });
    } catch (error) {
        // En caso de error, enviar mensaje genérico
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Obtener todas las esculturas
const obtenerEsculturas = async (req, res) => {
    try {
        // Obtener todas las esculturas, incluyendo la información del escultor y del evento
        const esculturas = await Escultura.findAll({
            include: [
                { model: Escultor, as: "escultor", attributes: ["id", "nombre"] },
                { model: Evento, as: "evento", attributes: ["id", "nombre", "tematica"] },
            ],
        });

        // Responder con las esculturas encontradas
        res.status(200).json({ esculturas });
    } catch (error) {
        // En caso de error, enviar mensaje genérico
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Obtener una escultura por ID
const obtenerEsculturaPorId = async (req, res) => {
    try {
        // Obtener el ID de la escultura desde los parámetros de la URL
        const { id } = req.params;

        // Buscar la escultura por su ID, incluyendo la información del escultor y del evento
        const escultura = await Escultura.findByPk(id, {
            include: [
                { model: Escultor, as: "escultor", attributes: ["id", "nombre"] },
                { model: Evento, as: "evento", attributes: ["id", "nombre", "tematica"] },
            ],
        });

        // Si no se encuentra la escultura, devolver un error
        if (!escultura) {
            return res.status(404).json({ message: "Escultura no encontrada" });
        }

        // Responder con la escultura encontrada
        res.status(200).json({ escultura });
    } catch (error) {
        // En caso de error, enviar mensaje genérico
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Actualizar una escultura
const actualizarEscultura = async (req, res) => {
    try {
        // Obtener el ID de la escultura desde los parámetros de la URL
        const { id } = req.params;
        // Desestructurar los datos recibidos en el cuerpo de la solicitud
        const { nombre, descripcion, plano, imagenes, imagenFinal, fechaCreacion, usuarioId, eventoId } = req.body;

        // Buscar la escultura por su ID
        const escultura = await Escultura.findByPk(id);
        if (!escultura) {
            // Si no se encuentra la escultura, devolver un error
            return res.status(404).json({ message: "Escultura no encontrada" });
        }

        // Actualizar la escultura con los nuevos datos
        await escultura.update({
            nombre,
            descripcion,
            plano,
            imagenes,
            imagenFinal,
            fechaCreacion,
            userId: usuarioId, // Usamos userId en lugar de escultorId
            eventoId,
        });

        // Responder con éxito y la escultura actualizada
        res.status(200).json({ message: "Escultura actualizada exitosamente", escultura });
    } catch (error) {
        // En caso de error, enviar mensaje genérico
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Eliminar una escultura
const eliminarEscultura = async (req, res) => {
    try {
        // Obtener el ID de la escultura desde los parámetros de la URL
        const { id } = req.params;

        // Buscar la escultura por su ID
        const escultura = await Escultura.findByPk(id);
        if (!escultura) {
            // Si no se encuentra la escultura, devolver un error
            return res.status(404).json({ message: "Escultura no encontrada" });
        }

        // Eliminar la escultura de la base de datos
        await escultura.destroy();
        // Responder con éxito
        res.status(200).json({ message: "Escultura eliminada exitosamente" });
    } catch (error) {
        // En caso de error, enviar mensaje genérico
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