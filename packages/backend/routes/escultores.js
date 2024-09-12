const express = require('express');
const Escultor = require('../models/Escultor');

const router = express.Router();

// Crear un nuevo escultor
router.post('/', async (req, res) => {
    try {
        const nuevoEscultor = await Escultor.create(req.body);
        res.status(201).json(nuevoEscultor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Obtener todos los escultores
router.get('/', async (req, res) => {
    try {
        const escultores = await Escultor.findAll();
        res.json(escultores);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Obtener un escultor por ID
router.get('/:id', async (req, res) => {
    try {
        const escultor = await Escultor.findByPk(req.params.id);
        if (!escultor) {
            return res.status(404).json({ error: 'Escultor no encontrado' });
        }
        res.json(escultor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Actualizar un escultor
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Escultor.update(req.body, { where: { id: req.params.id } });
        if (!updated) {
            return res.status(404).json({ error: 'Escultor no encontrado' });
        }
        res.json({ message: 'Escultor actualizado' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Eliminar un escultor
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Escultor.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ error: 'Escultor no encontrado' });
        }
        res.json({ message: 'Escultor eliminado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
