const { Escultor, User } = require("../models");

// Crear un escultor
const crearEscultor = async (req, res) => {
    try {
        const { userId, biografia, imagen, instagram, facebook, youtube, linkedin } = req.body;

        // Verifica si el usuario existe
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Crea el escultor asociado al usuario
        const escultor = await Escultor.create({
            userId: user.id, // Asociamos el `userId` al escultor
            biografia,
            imagen: imagen || "https://example.com/imagen-defecto.png", // Imagen por defecto si no se envía
            puntuacionTotal: 0,
            instagram,
            facebook,
            youtube,
            linkedin,
        });

        res.status(201).json({ message: "Escultor creado exitosamente", escultor });
    } catch (error) {
        console.error("Error al crear escultor:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Obtener todos los escultores
async function obtenerEscultores(req, res) {
    try {
        const escultores = await Escultor.findAll({
            include: [{
                model: User,
                as: 'usuario',
                attributes: ['id', 'nombre', 'username', 'email', 'role'],
            }],
            raw: true,
        });

        return res.json(escultores);
    } catch (error) {
        console.error('Error al obtener escultores:', error);
        return res.status(500).json({ message: 'Error al obtener escultores', error: error.message });
    }
}

// Obtener un escultor por ID
const obtenerEscultorPorId = async (req, res) => {
    try {
        const { id } = req.params; // Aquí `id` se debe cambiar a `userId`

        // Encontrar el escultor por el userId
        const escultor = await Escultor.findOne({
            where: { userId: id },  // Cambiar de `id` a `userId`
            include: [{
                model: User,
                as: 'usuario',
                attributes: ['nombre', 'username', 'email', 'role'],  // Ajusta los atributos según sea necesario
            }],
        });

        if (!escultor) {
            return res.status(404).json({ message: 'Escultor no encontrado' });
        }

        return res.json(escultor);  // Devolver el escultor encontrado
    } catch (error) {
        console.error('Error al obtener escultor:', error);
        return res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
};



// Actualizar un escultor por id
const actualizarEscultor = async (req, res) => {
    try {
        const { id } = req.params;
        const { biografia, imagen, puntuacionTotal, instagram, facebook, youtube, linkedin } = req.body;

        const escultor = await Escultor.findOne({ where: { userId: id } });
        if (!escultor) {
            return res.status(404).json({ message: "Escultor no encontrado" });
        }

        await escultor.update({
            biografia,
            imagen,
            puntuacionTotal,
            instagram,
            facebook,
            youtube,
            linkedin,
        });

        res.status(200).json({ message: "Escultor actualizado exitosamente", escultor });
    } catch (error) {
        console.error("Error al actualizar escultor:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Eliminar un escultor por id
const eliminarEscultor = async (req, res) => {
    try {
        const { id } = req.params;

        const escultor = await Escultor.findOne({ where: { userId: id } });
        if (!escultor) {
            return res.status(404).json({ message: "Escultor no encontrado" });
        }

        await escultor.destroy();
        res.status(200).json({ message: "Escultor eliminado exitosamente" });
    } catch (error) {
        console.error("Error al eliminar escultor:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = {
    crearEscultor,
    obtenerEscultores,
    obtenerEscultorPorId,
    actualizarEscultor,
    eliminarEscultor,
};