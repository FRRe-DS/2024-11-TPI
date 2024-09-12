const express = require('express');
const Evento = require('../models/Evento');

const router = express.Router();

// Crear un nuevo evento
router.post('/', async (req, res) => {
    try {
        const nuevoEvento = await Evento.create(req.body);
        res.status(201).json(nuevoEvento);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Obtener todos los eventos
router.get('/', async (req, res) => {
    try {
        const eventos = await Evento.findAll();
        res.json(eventos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Obtener un evento por ID
router.get('/:id', async (req, res) => {
    try {
        const evento = await Evento.findByPk(req.params.id);
        if (!evento) {
            return res.status(404).json({ error: 'Evento no encontrado' });
        }
        res.json(evento);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Actualizar un evento
router.put('/:id', async (req, res) => {
    try {
        const eventoActualizado = await Evento.update(req.body, { where: { id: req.params.id } });
        if (!eventoActualizado[0]) {
            return res.status(404).json({ error: 'Evento no encontrado' });
        }
        res.json({ message: 'Evento actualizado' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Eliminar un evento
router.delete('/:id', async (req, res) => {
    try {
        const eventoEliminado = await Evento.destroy({ where: { id: req.params.id } });
        if (!eventoEliminado) {
            return res.status(404).json({ error: 'Evento no encontrado' });
        }
        res.json({ message: 'Evento eliminado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
