const express = require("express");
const { updateUserRole } = require("../controllers/roleController");
const authenticateToken = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

// Cambiar rol del usuario
router.put("/:id", authenticateToken, roleMiddleware("admin"), updateUserRole);

module.exports = router;
