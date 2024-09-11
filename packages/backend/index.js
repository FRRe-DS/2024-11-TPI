const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const eventosRouter = require('./routes/eventos'); // Importa la ruta de eventos

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/eventos', eventosRouter); // Usa el router en la ruta /eventos

// Iniciar el servidor y la conexión con la base de datos
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
        console.log(`Servidor escuchando en http://localhost:${PORT}/eventos`); // Corregido 'port' a 'PORT'
    });
}).catch(err => {
    console.error('Error al conectar con la base de datos:', err);
});

