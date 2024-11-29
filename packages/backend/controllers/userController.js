const { User, Escultor } = require("../models");
const { processUserData } = require("../middlewares/userMiddleware");

// Obtener todos los usuarios
const getUsers = async (req, res) => {
    const limit = parseInt(req.query.limit) || 10; // Número de usuarios por página
    const offset = parseInt(req.query.offset) || 0; // Página actual
    try {
        const users = await User.findAll({
            attributes: ["id", "username", "email", "role", "isActive", "expiryDate"],
        });
        res.status(200).json({ users });
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
    try {
        const { username, email, password, role, isActive } = req.body;

        // Validar que los campos obligatorios estén presentes
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Nombre de usuario, correo y contraseña son obligatorios" });
        }

        // Crear el usuario con los datos proporcionados
        let user = User.build({
            username,
            email,
            password,
            role: role || "user", // Valor predeterminado
            isActive: isActive !== undefined ? isActive : true,
        });

        // Procesar datos del usuario (encriptar contraseña, etc.)
        await processUserData(user);

        // Guardar el usuario en la base de datos
        user = await user.save();

        res.status(201).json({ message: "Usuario creado con éxito", user });
    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ message: "Error al crear el usuario" });
    }
};

// Obtener un usuario por id
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

// Actualizar un usuario por id
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { role, isActive, password } = req.body;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        if (role) user.role = role;
        if (isActive !== undefined) user.isActive = isActive;
        if (password) user.password = password;

        await user.save();
        res.status(200).json({ message: "Usuario actualizado correctamente", user });
    } catch (error) {
        console.error("Error al actualizar usuario:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Eliminar un usuario por id
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        await user.destroy();
        res.status(200).json({ message: "Usuario eliminado exitosamente" });
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
};