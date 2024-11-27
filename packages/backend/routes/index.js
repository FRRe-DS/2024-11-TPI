const express = require("express");
const userRoutes = require("./userRoutes");
const escultorRoutes = require("./escultorRoutes");
const esculturaRoutes = require("./esculturaRoutes");
const eventoRoutes = require("./eventoRoutes");
const votoRoutes = require("./votoRoutes");
const qrRoutes = require("./qrRoutes");
const authRoutes = require("./authRoutes"); // Importar authRoutes

const router = express.Router();

console.log("Cargando rutas");
router.use("/users", userRoutes);
router.use("/escultores", escultorRoutes);
router.use("/esculturas", esculturaRoutes);
router.use("/eventos", eventoRoutes);
router.use("/votos", votoRoutes);
router.use("/qr", qrRoutes);
router.use("/auth", authRoutes); // Registrar las rutas de autenticación

module.exports = router;
