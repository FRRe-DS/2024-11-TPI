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

// Rutas de usuario
router.get("/", authenticateToken, roleMiddleware("admin"), getUsers); // Solo admins
router.post("/", authenticateToken, roleMiddleware("admin"), createUser); // Solo admins
router.get("/:id", authenticateToken, getUserById); // Cualquier usuario autenticado
router.put("/:id", authenticateToken, roleMiddleware("admin"), updateUser); // Solo admins
router.delete("/:id", authenticateToken, roleMiddleware("admin"), deleteUser); // Solo admins

module.exports = router;