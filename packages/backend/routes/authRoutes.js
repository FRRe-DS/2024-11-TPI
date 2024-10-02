// routes/authRoutes.js

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
require('dotenv').config(); // Cargar variables de entorno

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY; // Asegúrate de que esto esté definido correctamente

// Verifica que la clave secreta esté definida
if (!SECRET_KEY) {
    console.error('Error: SECRET_KEY no está definida en .env');
}

// Endpoint de login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Encontrar el usuario por username
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }

        // Generar el token JWT
        const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, SECRET_KEY, {
            expiresIn: '1h',
        });

        // Enviar el token y los datos del usuario
        res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
    } catch (error) {
        console.error('Error al autenticar al usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Exportar las rutas
module.exports = router;
