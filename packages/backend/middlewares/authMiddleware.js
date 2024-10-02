// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
require('dotenv').config(); // Cargar variables de entorno
const SECRET_KEY = process.env.SECRET_KEY; // Asegúrate de usar la clave secreta del entorno

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send({ message: 'Token no proporcionado.' });
    }

    // Eliminar "Bearer " del token si está presente
    const actualToken = token.startsWith('Bearer ') ? token.slice(7) : token;

    jwt.verify(actualToken, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Token no válido.' });
        }

        // Guarda la información del usuario en la solicitud para su uso posterior
        req.user = decoded;
        next();
    });
};

module.exports = verifyToken;