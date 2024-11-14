const express = require('express');
const router = express.Router();
const Voto = require('../models/Voto');
const Evento = require('../models/Evento');
const User = require('../models/User');
const verifyToken = require('../middlewares/authMiddleware'); // Verificación del token

// Ruta para registrar un voto
router.post('/:eventoId/:esculturaId', verifyToken, async (req, res) => {
    const { eventoId } = req.params;   // Evento en el que se va a votar
    const {esculturaId} = req.params;
    const { voto } = req.body;         // Voto del usuario: 'Sí' o 'No'
    const usuarioId = req.user.id;     // El ID del usuario decodificado del token

    try {
        // Verificar si el evento existe
        const evento = await Evento.findByPk(eventoId);
        if (!evento) {
            return res.status(404).send('Evento no encontrado');
        }

        // Verificar las fechas del evento
        const ahora = new Date();
        const fechaInicio = new Date(evento.fechaInicio); // Fecha de inicio del evento
        const fechaFin = new Date(evento.fechaFin);       // Fecha de fin del evento

        if (ahora < fechaInicio || ahora > fechaFin) {
            return res.status(400).send('La votación ha expirado');
        }

        // Verificar si el usuario ya votó en este evento
        const existeVoto = await Voto.findOne({ where: { eventoId, usuarioId } });
        if (existeVoto) {
            return res.status(400).send('Ya has votado en este evento');
        }

        // Registrar el voto
        await Voto.create({ eventoId,esculturaId, usuarioId, voto });
        res.status(200).send('Voto registrado correctamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar el voto');
    }
});

module.exports = router;