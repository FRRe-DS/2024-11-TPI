const express = require('express');
const Sponsor = require('../models/Sponsor');

const router = express.Router();

// Crear un nuevo sponsor
router.post('/', async (req, res) => {
    try {
        const nuevoSponsor = await Sponsor.create(req.body);
        res.status(201).json(nuevoSponsor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Obtener todos los sponsors
router.get('/', async (req, res) => {
    try {
        const sponsors = await Sponsor.findAll();
        res.json(sponsors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Obtener un sponsor por ID
router.get('/:id', async (req, res) => {
    try {
        const sponsor = await Sponsor.findByPk(req.params.id);
        if (!sponsor) {
            return res.status(404).json({ error: 'Sponsor no encontrado' });
        }
        res.json(sponsor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Actualizar un sponsor
router.put('/:id', async (req, res) => {
    try {
        const sponsorActualizado = await Sponsor.update(req.body, { where: { id: req.params.id } });
        if (!sponsorActualizado[0]) {
            return res.status(404).json({ error: 'Sponsor no encontrado' });
        }
        res.json({ message: 'Sponsor actualizado' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Eliminar un sponsor
router.delete('/:id', async (req, res) => {
    try {
        const sponsorEliminado = await Sponsor.destroy({ where: { id: req.params.id } });
        if (!sponsorEliminado) {
            return res.status(404).json({ error: 'Sponsor no encontrado' });
        }
        res.json({ message: 'Sponsor eliminado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

