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
require('dotenv').config(); // Cargar variables de entorno

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/eventos', eventosRouter);
app.use('/escultores', escultoresRouter);
app.use('/esculturas', esculturasRouter);
app.use('/imagenes', imagenesRouter);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/sponsors', sponsorRoutes);

// Iniciar el servidor y la conexión con la base de datos
sequelize.sync({ alter: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
            console.log(`Ruta de eventos: http://localhost:${PORT}/eventos`);
            console.log(`Ruta de escultores: http://localhost:${PORT}/escultores`);
            console.log(`Ruta de esculturas: http://localhost:${PORT}/esculturas`);
            console.log(`Ruta de imágenes: http://localhost:${PORT}/imagenes`);
            console.log(`Ruta de patrocinadores: http://localhost:${PORT}/api/sponsors`);
        });
    })
    .catch(err => {
        console.error('Error al conectar con la base de datos:', err);
    });
