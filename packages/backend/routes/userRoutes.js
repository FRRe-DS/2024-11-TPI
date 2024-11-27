const express = require("express");
const {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
} = require("../controllers/userController");
const authenticateToken = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

// Ruta para obtener el usuario autenticado
router.get("/user", authenticateToken, (req, res) => {
    try {
        const user = req.user; // Usuario autenticado
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.error("Error al obtener usuario autenticado:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
});

// Otras rutas de usuario
router.get("/", authenticateToken, roleMiddleware("admin"), getUsers); // Solo admins
router.post("/", authenticateToken, roleMiddleware("admin"), createUser); // Solo admins
router.get("/:id", authenticateToken, getUserById); // Cualquier usuario autenticado
router.put("/:id", authenticateToken, roleMiddleware("admin"), updateUser); // Solo admins
router.delete("/:id", authenticateToken, roleMiddleware("admin"), deleteUser); // Solo admins

module.exports = router;