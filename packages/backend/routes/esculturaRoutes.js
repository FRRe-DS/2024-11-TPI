const express = require("express");

// Importación de las funciones del controlador para manejar las esculturas
const {
    crearEscultura,
    obtenerEsculturas,
    obtenerEsculturaPorId,
    actualizarEscultura,
    eliminarEscultura,
} = require("../controllers/esculturaController");

// Importación de los middlewares de autenticación y autorización de roles
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

// Crear una instancia del router de Express
const router = express.Router();

// Ruta para crear una nueva escultura
// Solo accesible para usuarios con el rol 'escultor' o 'admin'
router.post("/", authMiddleware, roleMiddleware("admin"), async (req, res) => {
    try {
        // Llamada al controlador para crear la escultura
        await crearEscultura(req, res);
    } catch (error) {
        // Error general, mínimo pero necesario para capturar posibles fallos
        res.status(500).json({ error: "Error al crear la escultura" });
    }
});

// Ruta para obtener todas las esculturas
// Accesible sin restricciones
router.get("/", async (req, res) => {
    try {
        // Llamada al controlador para obtener todas las esculturas
        await obtenerEsculturas(req, res);
    } catch (error) {
        // Error general, mínimo pero necesario
        res.status(500).json({ error: "Error al obtener las esculturas" });
    }
});

// Ruta para obtener una escultura por su ID
// Accesible sin restricciones
router.get("/:id", async (req, res) => {
    try {
        // Llamada al controlador para obtener una escultura por ID
        await obtenerEsculturaPorId(req, res);
    } catch (error) {
        // Error general, mínimo pero necesario
        res.status(500).json({ error: "Error al obtener la escultura por ID" });
    }
});

// Ruta para actualizar una escultura
// Solo accesible para usuarios con el rol 'escultor' o 'admin'
router.put("/:id", authMiddleware, roleMiddleware("admin"), async (req, res) => {
    try {
        // Llamada al controlador para actualizar la escultura
        await actualizarEscultura(req, res);
    } catch (error) {
        // Error general, mínimo pero necesario
        res.status(500).json({ error: "Error al actualizar la escultura" });
    }
});

// Ruta para eliminar una escultura
// Solo accesible para usuarios con el rol 'admin'
router.delete("/:id", authMiddleware, roleMiddleware("admin"), async (req, res) => {
    try {
        // Llamada al controlador para eliminar la escultura
        await eliminarEscultura(req, res);
    } catch (error) {
        // Error general, mínimo pero necesario
        res.status(500).json({ error: "Error al eliminar la escultura" });
    }
});

// Exportamos el router para usarlo en otros módulos
module.exports = router;