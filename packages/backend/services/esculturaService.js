const { Escultura } = require("../models");

const createEscultura = async (data) => {
    const newEscultura = await Escultura.create(data);
    return newEscultura;
};

const getEsculturas = async () => {
    const esculturas = await Escultura.findAll();
    return esculturas;
};

const getEsculturaById = async (id) => {
    const escultura = await Escultura.findByPk(id);
    if (!escultura) {
        throw new Error("Escultura no encontrada");
    }
    return escultura;
};

const updateEscultura = async (id, data) => {
    const escultura = await Escultura.findByPk(id);
    if (!escultura) {
        throw new Error("Escultura no encontrada");
    }

    await escultura.update(data);
    return escultura;
};

const deleteEscultura = async (id) => {
    const escultura = await Escultura.findByPk(id);
    if (!escultura) {
        throw new Error("Escultura no encontrada");
    }

    await escultura.destroy();
    return true;
};

module.exports = {
    createEscultura,
    getEsculturas,
    getEsculturaById,
    updateEscultura,
    deleteEscultura,
};
