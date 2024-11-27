const bcrypt = require("bcryptjs");
const { User } = require("../models");
const { generateToken } = require("../../shared/utils/jwt");

// Registro de usuario
const register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // Validar datos requeridos
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        // Verificar si el usuario ya existe
        const userExists = await User.findOne({ where: { username } });
        if (userExists) {
            return res.status(400).json({ message: "El nombre de usuario ya está registrado" });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el usuario
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            role: role || "user", // Asigna "user" como rol predeterminado
        });

        res.status(201).json({ message: "Usuario registrado exitosamente", user: newUser });
    } catch (error) {
        console.error("Error en registro:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Inicio de sesión
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Nombre de usuario y contraseña son obligatorios" });
        }

        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        const token = generateToken({
            id: user.id,
            username: user.username,
            role: user.role, // Incluye el rol en el token
        });

        res.status(200).json({
            message: "Inicio de sesión exitoso",
            token,
            user: {
                id: user.id,
                username: user.username,
                role: user.role,
            },
        });
    } catch (error) {
        console.error("Error en login:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = { register, login };