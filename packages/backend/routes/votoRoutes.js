const express = require("express");
const { castVote, deleteVote } = require("../controllers/votoController");
const authenticateToken = require("../middlewares/authMiddleware");

const router = express.Router();

// Ruta para registrar o actualizar un voto
router.post("/:esculturaId", authenticateToken, castVote);

// Ruta para eliminar un voto
router.delete("/:esculturaId", authenticateToken, deleteVote);

module.exports = router;
