const express = require("express");
const {
    crearEvento,
    obtenerEventos,
    obtenerEventoPorId,
    actualizarEvento,
    eliminarEvento,
} = require("../controllers/eventoController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

// Crear un evento (solo accesible para admin)
router.post("/", authMiddleware, roleMiddleware("admin"), crearEvento);

// Obtener todos los eventos
router.get("/", obtenerEventos);

// Obtener un evento por ID
router.get("/:id", obtenerEventoPorId);

// Actualizar un evento (solo accesible para admin)
router.put("/:id", authMiddleware, roleMiddleware("admin"), actualizarEvento);

// Eliminar un evento (solo accesible para admin)
router.delete("/:id", authMiddleware, roleMiddleware("admin"), eliminarEvento);

module.exports = router;