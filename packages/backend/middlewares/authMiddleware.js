// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send({ message: 'Token no proporcionado.' });
    }

    const actualToken = token.startsWith('Bearer ') ? token.slice(7) : token;

    jwt.verify(actualToken, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Token no válido.' });
        }

        req.user = decoded; // Guarda el usuario decodificado en la solicitud
        next();
    });
};

module.exports = verifyToken;
