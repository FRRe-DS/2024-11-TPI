const express = require("express");
const { login, register} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// Ruta para login
router.post("/login", login);
router.post("/register", register);

// Ruta protegida de ejemplo
router.get("/protected", authMiddleware, (req, res) => {
    res.json({ message: "Acceso permitido", user: req.user });
});

module.exports = router;