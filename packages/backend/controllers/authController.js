const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Función para manejar el login
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Buscar al usuario por username
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Generar el token JWT
        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            'tu_clave_secreta', // Reemplaza con tu clave secreta
            { expiresIn: '1h' }
        );

        res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
    } catch (error) {
        console.error('Error al autenticar al usuario:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};
