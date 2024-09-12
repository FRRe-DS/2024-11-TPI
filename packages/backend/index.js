const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const eventosRouter = require('./routes/eventos');
const escultoresRouter = require('./routes/escultores');
const esculturasRouter = require('./routes/esculturas');
const imagenesRouter = require('./routes/imagenes');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/eventos', eventosRouter);
app.use('/escultores', escultoresRouter);
app.use('/esculturas', esculturasRouter);
app.use('/imagenes', imagenesRouter);

// Iniciar el servidor y la conexión con la base de datos
sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
        console.log(`Ruta de eventos: http://localhost:${PORT}/eventos`);
        console.log(`Ruta de escultores: http://localhost:${PORT}/escultores`);
        console.log(`Ruta de esculturas: http://localhost:${PORT}/esculturas`);
        console.log(`Ruta de imágenes: http://localhost:${PORT}/imagenes`);
    });
}).catch(err => {
    console.error('Error al conectar con la base de datos:', err);
});
