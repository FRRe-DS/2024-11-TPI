const express = require("express");
const {
    crearEscultura,
    obtenerEsculturas,
    obtenerEsculturaPorId,
    actualizarEscultura,
    eliminarEscultura,
} = require("../controllers/esculturaController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

// Crear una escultura (solo accesible para escultores o admin)
router.post("/", authMiddleware, roleMiddleware("escultor"), crearEscultura);

// Obtener todas las esculturas
router.get("/", obtenerEsculturas);

// Obtener una escultura por ID
router.get("/:id", obtenerEsculturaPorId);

// Actualizar una escultura (solo accesible para escultores o admin)
router.put("/:id", authMiddleware, roleMiddleware("escultor"), actualizarEscultura);

// Eliminar una escultura (solo accesible para admin)
router.delete("/:id", authMiddleware, roleMiddleware("admin"), eliminarEscultura);

module.exports = router;
