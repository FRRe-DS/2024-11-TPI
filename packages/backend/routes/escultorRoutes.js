const express = require("express");
const {
    crearEscultor,
    obtenerEscultores,
    obtenerEscultorPorId,
    actualizarEscultor,
    eliminarEscultor,
} = require("../controllers/escultorController");
const authenticateToken = require("../middlewares/authMiddleware"); // Cambiado a importar la función directamente
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

// Crear un escultor (solo accesible para admin)
router.post("/", authenticateToken, roleMiddleware("admin"), crearEscultor);

// Obtener todos los escultores
router.get("/", authenticateToken, obtenerEscultores);

// Obtener un escultor por ID
router.get("/:id", authenticateToken, obtenerEscultorPorId);

// Actualizar un escultor (solo accesible para admin)
router.put("/:id", authenticateToken, roleMiddleware("admin"), actualizarEscultor);

// Eliminar un escultor (solo accesible para admin)
router.delete("/:id", authenticateToken, roleMiddleware("admin"), eliminarEscultor);

module.exports = router;