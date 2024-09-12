const express = require('express');
const Escultura = require('../models/Escultura');

const router = express.Router();

// Crear una nueva escultura
router.post('/', async (req, res) => {
    try {
        const nuevaEscultura = await Escultura.create(req.body);
        res.status(201).json(nuevaEscultura);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Obtener todas las esculturas
router.get('/', async (req, res) => {
    try {
        const esculturas = await Escultura.findAll();
        res.json(esculturas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Obtener una escultura por ID
router.get('/:id', async (req, res) => {
    try {
        const escultura = await Escultura.findByPk(req.params.id);
        if (!escultura) {
            return res.status(404).json({ error: 'Escultura no encontrada' });
        }
        res.json(escultura);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Actualizar una escultura
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Escultura.update(req.body, { where: { id: req.params.id } });
        if (!updated) {
            return res.status(404).json({ error: 'Escultura no encontrada' });
        }
        res.json({ message: 'Escultura actualizada' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Eliminar una escultura
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Escultura.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ error: 'Escultura no encontrada' });
        }
        res.json({ message: 'Escultura eliminada' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
