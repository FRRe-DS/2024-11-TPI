const { Escultor } = require("../models");

const createEscultor = async (data) => {
    const newEscultor = await Escultor.create(data);
    return newEscultor;
};

const getEscultores = async () => {
    const escultores = await Escultor.findAll();
    return escultores;
};

const getEscultorById = async (id) => {
    const escultor = await Escultor.findByPk(id);
    if (!escultor) {
        throw new Error("Escultor no encontrado");
    }
    return escultor;
};

const updateEscultor = async (id, data) => {
    const escultor = await Escultor.findByPk(id);
    if (!escultor) {
        throw new Error("Escultor no encontrado");
    }

    await escultor.update(data);
    return escultor;
};

const deleteEscultor = async (id) => {
    const escultor = await Escultor.findByPk(id);
    if (!escultor) {
        throw new Error("Escultor no encontrado");
    }

    await escultor.destroy();
    return true;
};

module.exports = {
    createEscultor,
    getEscultores,
    getEscultorById,
    updateEscultor,
    deleteEscultor,
};