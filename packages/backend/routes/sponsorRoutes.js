const express = require('express');
const router = express.Router();
const SponsorController = require('../controllers/SponsorController');

router.get('/', SponsorController.getAllSponsors);
router.post('/', SponsorController.createSponsor);
// Agrega rutas para actualizar y eliminar patrocinadores

module.exports = router;