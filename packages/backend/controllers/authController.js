// auth/controllers/authController.js

const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

// Función para generar token JWT basado en el rol
const generateToken = (user) => {
    const payload = { id: user.id, username: user.username, role: user.role };
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};

// Función para manejar el registro de usuario
exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body; // Ya no necesitas 'role' aquí, se asigna por defecto

    try {
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            console.log('El usuario ya existe.');
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Encriptar la contraseña antes de crear el usuario
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el usuario con la contraseña encriptada
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            role: 'user' // Asignar el rol 'user' por defecto
        });

        console.log('Usuario creado:', newUser);

        // Generar token JWT
        const token = generateToken(newUser);

        res.status(201).json({
            message: 'Usuario creado con éxito',
            token,
            user: { id: newUser.id, username: newUser.username, email: newUser.email, role: newUser.role }
        });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
};
