const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user'); // Asegúrate de que esta ruta sea correcta
require('dotenv').config();

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

if (!SECRET_KEY) {
    console.error('Error: SECRET_KEY no está definida en .env');
}

// Ruta para el inicio de sesión
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            console.log('Usuario no encontrado');
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }

        console.log('Contraseña ingresada:', password);
        console.log('Contraseña del usuario (hash):', user.password);

        const isMatch = await bcrypt.compare(password, user.password);
        console.log('¿Las contraseñas coinciden?', isMatch);

        if (!isMatch) {
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }

        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
    } catch (error) {
        console.error('Error al autenticar al usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});


// Ruta para el registro
router.post('/register', async (req, res) => {
    const { username, email, password, role } = req.body; // Agregar 'email' aquí
    console.log('Datos recibidos en el backend:', req.body);

    // Validar que los campos no estén vacíos
    if (!username || !email || !password || !role) { // Validar 'email' también
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        // Verificar si el nombre de usuario ya existe
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
        }

        // Crear nuevo usuario
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password: hashedPassword, role }); // Incluir 'email'

        res.status(201).json({ message: 'Usuario creado con éxito', user: { id: newUser.id, username: newUser.username, email: newUser.email, role: newUser.role } });
    } catch (error) {
        console.error('Error al registrar el usuario:', error);

        // Manejo de errores específicos de Sequelize
        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ message: error.errors.map(err => err.message) });
        } else if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        res.status(500).json({ message: 'Error al crear el usuario' });
    }
});

module.exports = router;
