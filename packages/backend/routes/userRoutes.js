const express = require('express');
const authenticate = require('../middlewares/authMiddleware');
const User = require('../models/User');
const router = express.Router();

// Ruta protegida que solo puede acceder el usuario autenticado
router.get('/profile', authenticate, async (req, res) => {
    try {
        const user = await User.findByPk(req.user.userId);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
