// Importamos los modelos necesarios para la creación de la escultura
const { Escultura, Escultor } = require("../models");

// Función para crear una nueva escultura
const createEscultura = async () => {
    try {
        // ID del escultor al que se le asignará la escultura.
        const escultorId = 1; // Cambia este valor según el ID del escultor correspondiente.

        // Verificamos si el escultor con el ID dado existe en la base de datos.
        const existingEscultor = await Escultor.findByPk(escultorId);

        // Si no encontramos el escultor, lanzamos un error y terminamos la ejecución.
        if (!existingEscultor) {
            throw new Error("El escultor no existe.");
        }

        // Definimos los datos de la nueva escultura que queremos crear.
        const nuevaEscultura = {
            nombre: "Escultura de Prueba", // Nombre de la escultura.
            descripcion: "Esta es una escultura de prueba creada por un escultor.", // Descripción de la escultura.
            plano: "https://example.com/plano.png", // URL de la imagen del plano de la escultura.
            fechaCreacion: new Date(), // Fecha de creación de la escultura.
            escultorId: existingEscultor.id, // Asociamos la escultura al escultor encontrado anteriormente.
        };

        // Creamos la nueva escultura en la base de datos.
        const escultura = await Escultura.create(nuevaEscultura);

        // Mostramos un mensaje de éxito solo si la escultura se crea correctamente.
        // Este log debería ser removido si no se desea mostrar información de éxito en producción.
        // console.log("Escultura creada exitosamente:", escultura);
    } catch (error) {
        // Si ocurre algún error, lo mostramos en consola con un mensaje claro.
        console.error("Error al crear la escultura:", error.message);
    }
};

// Ejecutamos la función para crear la escultura.
createEscultura();