// controllers/eventosController.js
const Evento = require('../models/Evento'); // Asegúrate de importar tu modelo de evento

// Función para obtener un evento por ID
const obtenerEventoPorId = async (req, res) => {
    const { eventoId } = req.params;

    try {
        const evento = await Evento.findByPk(eventoId);

        if (!evento) {
            return res.status(404).send({ message: 'Evento no encontrado' });
        }

        // Devuelve el evento, asegurándote de incluir las fechas de votación
        res.json(evento);
    } catch (error) {
        console.error('Error al obtener evento:', error);
        res.status(500).send({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    obtenerEventoPorId,
};
