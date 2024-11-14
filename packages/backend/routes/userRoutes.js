// routes/userRoutes.js
const express = require('express');
const authenticate = require('../middlewares/authMiddleware');
const User = require('../models/user'); // Asegúrate de que este modelo esté definido correctamente

const router = express.Router();

router.get('/', authenticate, async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;