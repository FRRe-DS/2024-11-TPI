const { Escultura, Escultor } = require("../models");

const createEscultura = async () => {
    try {
        // ID del escultor al que pertenece la escultura
        const escultorId = 1; // Reemplaza con el ID del escultor creado

        // Verificar si el escultor existe
        const existingEscultor = await Escultor.findByPk(escultorId);
        if (!existingEscultor) {
            console.log("El escultor no existe.");
            return;
        }

        // Datos de la escultura
        const nuevaEscultura = {
            nombre: "Escultura de Prueba",
            descripcion: "Esta es una escultura de prueba creada por un escultor.",
            plano: "https://example.com/plano.png", // URL de imagen de prueba
            fechaCreacion: new Date(),
            escultorId: existingEscultor.id,
        };

        // Crear la escultura
        const escultura = await Escultura.create(nuevaEscultura);

        console.log("Escultura creada exitosamente:", escultura);
    } catch (error) {
        console.error("Error al crear la escultura:", error);
    }
};

createEscultura();
