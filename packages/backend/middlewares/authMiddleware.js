const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Acceso denegado' });

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret'); // Replace with process.env.JWT_SECRET in production
        const user = await User.findById(decoded.id); // Mongoose method
        if (!user) return res.status(401).json({ message: 'Usuario no encontrado' });

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token inválido' });
    }
};

module.exports = authenticate;
