// Importación de dependencias principales
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./config/database"); // Configuración de la base de datos
const routes = require("./routes"); // Importación de rutas principales

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Inicializar la aplicación de Express
const app = express();

// Middlewares globales
app.use(
    cors({
        origin: ['http://localhost:5173', process.env.FRONTEND_URL], // Agrega el origen del frontend
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
        credentials: true, // Permitir envío de cookies
    })
);
app.use(express.json()); // Para manejar solicitudes JSON
app.use(express.urlencoded({ extended: true })); // Manejar datos enviados en formularios

// Probar conexión a la base de datos
sequelize
    .authenticate()
    .then(() => {
        console.log("Conexión a la base de datos establecida con éxito.");
    })
    .catch((error) => {
        console.error("Error al conectar con la base de datos:", error.message || error);
        process.exit(1); // Finaliza la ejecución si no hay conexión
    });

// Cargar rutas
console.log("Cargando rutas principales...");
app.use("/api", routes);

// Sincronizar modelos con la base de datos (solo en desarrollo)
if (process.env.NODE_ENV === "development") {
    sequelize
        .sync({ alter: true }) // Usa alter para ajustar automáticamente los modelos
        .then(() => {
            console.log("Modelos sincronizados correctamente.");
        })
        .catch((error) => {
            console.error("Error al sincronizar los modelos:", error.message || error);
        });
}

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.error("Error detectado:", err.stack || "Error desconocido.");
    res.status(500).json({ error: "Error interno del servidor." });
});

// Inicializar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

sequelize.sync({ alter: true }) // Usa alter para evitar pérdida de datos
    .then(() => {
        console.log("Tablas sincronizadas correctamente.");
    })
    .catch((error) => {
        console.error("Error al sincronizar las tablas:", error);
    });
