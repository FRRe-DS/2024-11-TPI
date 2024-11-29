const { User, Escultor } = require("../models");

// Actualizar el rol del usuario por id
const updateUserRole = async (req, res) => {
    try {
        const { id } = req.params;
        const { role } = req.body;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const previousRole = user.role;
        user.role = role;
        await user.save();

        if (role === "escultor" && previousRole !== "escultor") {
            const existingSculptor = await Escultor.findOne({ where: { userId: id } });
            if (!existingSculptor) {
                await Escultor.create({
                    userId: id,
                    username: user.username,
                    email: user.email,
                });
            }
        } else if (role !== "escultor" && previousRole === "escultor") {
            await Escultor.update({ isActive: false }, { where: { userId: id } });
        }

        res.status(200).json({ message: "Rol actualizado correctamente", user });
    } catch (error) {
        console.error("Error al actualizar rol del usuario:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = { updateUserRole };