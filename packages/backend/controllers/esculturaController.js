const { Evento, Escultura, Escultor, User } = require("../models");

// Crear una escultura
const crearEscultura = async (req, res, next) => {
    try {
        const { nombre, escultorId, eventoId } = req.body;
        const userId= escultorId;
        // Verificar si el escultor existe y pertenece al usuario
        const escultor = await Escultor.findOne({
            where: { userId }, // Buscar por el `userId`
            include: [
                {
                    model: Escultura,
                    as: "escultura", // Especificar el alias definido en la asociación
                },
                {
                    model: User,
                    as: "usuario", // Especificar el alias definido en la asociación
                    attributes: ["nombre"], // Obtener solo los campos necesarios
                },
            ],
        });
        if (!escultor) {
            return res.status(404).json({ message: "Escultor no encontrado." });
        }

        // Verificar si ya tiene una escultura asociada
        if (escultor.escultura) {
            return res.status(400).json({ message: "El escultor ya tiene una escultura asociada." });
        }

        // Crear la nueva escultura
        const nuevaEscultura = await Escultura.create({
            nombre,
            userId,
            eventoId,// Asociar la escultura al usuario a través de `userId`
        });
        console.log(nuevaEscultura);
        res.status(201).json(nuevaEscultura);
    } catch (error) {
        console.error("Error al crear la escultura:", error); // Registrar el error en el servidor
        res.status(500).json({ error: "Error al crear la escultura" });
    }
};

// Obtener esculturas, con la posibilidad de filtrar por escultor
const obtenerEsculturas = async (req, res) => {
    try {
        // Acceder correctamente al parámetro de consulta escultorId
        const { escultorId } = req.query;  // Aquí extraemos escultorId, no 'userId'

        const where = {}; // Definir el filtro para la consulta

        // Si se recibe el escultorId, agregarlo al filtro
        if (escultorId) {
            where['userId'] = escultorId;  // Filtrar por escultorId (debe coincidir con la columna en la base de datos)
        }

        // Obtener las esculturas, filtrando por escultorId si está presente
        const esculturas = await Escultura.findAll({
            where,
            include: [
                { model: Escultor, as: "escultor", attributes: ["userId"] },
                { model: Evento, as: "evento", attributes: ["id"] },
            ],
        });

        // Responder con las esculturas encontradas
        res.status(200).json({ esculturas });
    } catch (error) {
        // Log del error para depuración
        console.error('Error al obtener esculturas:', error);

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
                {
                    model: Escultor,
                    as: "escultor",
                    include: [
                        {
                            model: User,
                            as: "usuario",  // Asegúrate de usar el alias correcto
                            attributes: ["id", "nombre"],  // Selecciona los campos del Usuario
                        }
                    ]
                },
                {
                    model: Evento,
                    as: "evento",
                    attributes: ["id", "nombre", "tematica"],
                },
            ],
        });

        // Si no se encuentra la escultura, devolver un error
        if (!escultura) {
            console.log('no la encuentra')
            return res.status(404).json({ message: "Escultura no encontrada" });
        }

        // Responder con la escultura encontrada
        res.status(200).json({ escultura });
    } catch (error) {
        // En caso de error, enviar mensaje genérico
        console.log(error)
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