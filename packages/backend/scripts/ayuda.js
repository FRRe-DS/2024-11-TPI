const { Escultura, Escultor } = require("../models");

const addStars = async (esculturaId, starsToAdd) => {
    try {
        // Encuentra la escultura por ID
        const escultura = await Escultura.findByPk(esculturaId);
        if (!escultura) {
            throw new Error("Escultura no encontrada");
        }

        // Actualizar la puntuación de la escultura
        await escultura.increment("puntuacion", { by: starsToAdd });

        // Actualizar la puntuación total del escultor
        const escultor = await Escultor.findByPk(escultura.escultorId);
        if (!escultor) {
            throw new Error("Escultor no encontrado");
        }

        await escultor.increment("puntuacionTotal", { by: starsToAdd });

        console.log(`Se sumaron ${starsToAdd} estrellas a la escultura y al escultor.`);
    } catch (error) {
        console.error("Error al sumar las estrellas:", error);
    }
};

// Llamamos a la función con la ID de la escultura y el número de estrellas que queremos añadir
addStars(1, 5);  // Sumar 5 estrellas a la escultura con ID 1
