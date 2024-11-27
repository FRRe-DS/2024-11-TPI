const express = require("express");
const checkUserStatus = require("../middlewares/checkUserStatus");
const authMiddleware = require("../middlewares/authMiddleware"); // Verifica JWT, si lo tienes configurado
const router = express.Router();

router.use(authMiddleware); // Primero autentica el usuario
router.use(checkUserStatus); // Luego verifica su estado

// Rutas protegidas
router.get("/dashboard", (req, res) => {
    res.json({ message: "Bienvenido al panel de control" });
});

router.post("/acciones", (req, res) => {
    res.json({ message: "Acción ejecutada correctamente" });
});

module.exports = router;