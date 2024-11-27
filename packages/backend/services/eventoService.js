const { Evento } = require("../models");

const createEvento = async (data) => {
    const newEvento = await Evento.create(data);
    return newEvento;
};

const getEventos = async () => {
    const eventos = await Evento.findAll();
    return eventos;
};

const getEventoById = async (id) => {
    const evento = await Evento.findByPk(id);
    if (!evento) {
        throw new Error("Evento no encontrado");
    }
    return evento;
};

const updateEvento = async (id, data) => {
    const evento = await Evento.findByPk(id);
    if (!evento) {
        throw new Error("Evento no encontrado");
    }

    await evento.update(data);
    return evento;
};

const deleteEvento = async (id) => {
    const evento = await Evento.findByPk(id);
    if (!evento) {
        throw new Error("Evento no encontrado");
    }

    await evento.destroy();
    return true;
};

module.exports = {
    createEvento,
    getEventos,
    getEventoById,
    updateEvento,
    deleteEvento,
};