const { User } = require("../models");

// Obtener todos los usuarios
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ["id", "username", "email", "role", "isActive", "expiryDate"],
        });
        console.log("Usuarios enviados:", users); // Log para revisar datos
        res.status(200).json({ users });
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
    try {
        const { username, email, password, role, isActive, expiryDate } = req.body;

        const newUser = await User.create({
            username,
            email,
            password, // Debería estar cifrado en un middleware o antes de guardar
            role: role || "user", // Valor predeterminado
            isActive: isActive !== undefined ? isActive : true,
            expiryDate,
        });

        res.status(201).json({ message: "Usuario creado exitosamente", user: newUser });
    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id, {
            attributes: ["id", "username", "email", "role", "isActive", "expiryDate"],
        });

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error("Error al obtener usuario:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Actualizar un usuario
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { role } = req.body;

        console.log("Actualizando rol del usuario:", { id, role }); // Log de entrada

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        await user.update({ role });

        console.log("Usuario actualizado:", user); // Log de éxito
        res.status(200).json({ message: "Rol actualizado correctamente", user });
    } catch (error) {
        console.error("Error al actualizar usuario:", error); // Log de error
        res.status(500).json({ error: "Error interno del servidor" });
    }
};


// Eliminar un usuario
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        await user.destroy(); // Esto automáticamente elimina el escultor relacionado debido a ON DELETE CASCADE
        res.status(200).json({ message: "Usuario eliminado exitosamente" });
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

const updateUserRole = async (req, res) => {
    const { id } = req.params;
    const { role } = req.body;

    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Si se cambia a escultor, crea un registro en Escultors
        if (role === "escultor" && user.role !== "escultor") {
            await Escultor.create({
                userId: user.id,
                username: user.username,
                email: user.email,
                nombre: user.username, // Puedes cambiar esto si hay un nombre específico
            });
        }

        // Si se cambia de escultor a otro rol, elimina el registro en Escultors
        if (user.role === "escultor" && role !== "escultor") {
            await Escultor.destroy({ where: { userId: user.id } });
        }

        // Actualiza el rol del usuario
        await user.update({ role });
        res.status(200).json({ message: "Rol actualizado correctamente", user });
    } catch (error) {
        console.error("Error al actualizar rol del usuario:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};


module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    updateUserRole,
};