const express = require('express');
const router = express.Router();

const {
    crearEscultor,
    obtenerEscultores,
    obtenerEscultorPorId,
    actualizarEscultor,
    eliminarEscultor,
} = require("../controllers/escultorController");
const authenticateToken = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

// Crear un escultor (solo accesible para admin)
router.post("/", authenticateToken, roleMiddleware("admin"), crearEscultor);

// Obtener todos los escultores
router.get("/", authenticateToken, obtenerEscultores);

// Obtener un escultor por id
router.get("/:id", authenticateToken, obtenerEscultorPorId);

// Actualizar un escultor (por id) - Solo admins
router.put("/:id", authenticateToken, roleMiddleware("admin"), actualizarEscultor);

// Eliminar un escultor (por id) - Solo admins
router.delete("/:id", authenticateToken, roleMiddleware("admin"), eliminarEscultor);

module.exports = router;
