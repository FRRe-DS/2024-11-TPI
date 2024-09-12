const express = require('express');
const Imagen = require('../models/Imagen');

const router = express.Router();

// Crear una nueva imagen
router.post('/', async (req, res) => {
    try {
        const nuevaImagen = await Imagen.create(req.body);
        res.status(201).json(nuevaImagen);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Obtener todas las imágenes
router.get('/', async (req, res) => {
    try {
        const imagenes = await Imagen.findAll();
        res.json(imagenes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Obtener una imagen por ID
router.get('/:id', async (req, res) => {
    try {
        const imagen = await Imagen.findByPk(req.params.id);
        if (!imagen) {
            return res.status(404).json({ error: 'Imagen no encontrada' });
        }
        res.json(imagen);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Actualizar una imagen
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Imagen.update(req.body, { where: { id: req.params.id } });
        if (!updated) {
            return res.status(404).json({ error: 'Imagen no encontrada' });
        }
        res.json({ message: 'Imagen actualizada' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Eliminar una imagen
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Imagen.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ error: 'Imagen no encontrada' });
        }
        res.json({ message: 'Imagen eliminada' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
