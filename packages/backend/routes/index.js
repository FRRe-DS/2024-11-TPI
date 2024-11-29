const express = require("express");
const userRoutes = require("./userRoutes");
const escultorRoutes = require("./escultorRoutes");
const roleRoutes = require("./roleRoutes"); // Nueva ruta para roles
const esculturaRoutes = require("./esculturaRoutes");
const eventoRoutes = require("./eventoRoutes");
const votoRoutes = require("./votoRoutes");
const qrRoutes = require("./qrRoutes");
const authRoutes = require("./authRoutes");

const router = express.Router();

console.log("Cargando rutas");
router.use("/users", userRoutes);
router.use("/escultores", escultorRoutes);
router.use("/roles", roleRoutes); // Registrar rutas de roles
router.use("/esculturas", esculturaRoutes);
router.use("/eventos", eventoRoutes);
router.use("/votos", votoRoutes);
router.use("/qr", qrRoutes);
router.use("/auth", authRoutes);

module.exports = router;