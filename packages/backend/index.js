// index.js

const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const eventosRouter = require('./routes/eventos');
const escultoresRouter = require('./routes/escultores');
const esculturasRouter = require('./routes/esculturas');
const imagenesRouter = require('./routes/imagenes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const sponsorRoutes = require('./routes/sponsorRoutes');

const app = express();
const PORT = 3000;
require('dotenv').config();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/eventos', eventosRouter);
app.use('/escultores', escultoresRouter);
app.use('/esculturas', esculturasRouter);
app.use('/imagenes', imagenesRouter);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes); // Asegúrate de que esta línea esté aquí
app.use('/api/sponsors', sponsorRoutes);

// Iniciar el servidor y la conexión con la base de datos
sequelize.sync({ alter: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error al conectar con la base de datos:', err);
    });
