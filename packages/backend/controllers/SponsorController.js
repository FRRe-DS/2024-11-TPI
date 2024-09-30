const Sponsor = require('../models/Sponsor');

exports.getAllSponsors = async (req, res) => {
    try {
        const sponsors = await Sponsor.findAll();
        res.json(sponsors);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving sponsors' });
    }
};

exports.createSponsor = async (req, res) => {
    const { id, name } = req.body;
    try {
        const newSponsor = await Sponsor.create({ id, name });
        res.status(201).json(newSponsor);
    } catch (error) {
        res.status(500).json({ message: 'Error creating sponsor' });
    }
};

// Agrega otros métodos para actualizar y eliminar patrocinadores
