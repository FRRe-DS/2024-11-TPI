const express = require("express");
const { generateQr, validateQr } = require("../controllers/qrController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Generar un QR (requiere autenticación)
router.post("/generate", authMiddleware, generateQr);

// Validar un QR escaneado
router.get("/validate/:uniqueCode", validateQr);

module.exports = router;