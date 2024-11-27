const bcrypt = require("bcryptjs");
const { User } = require("../models");
const { generateToken } = require("../utils/jwt");

const registerUser = async ({ username, email, password, role }) => {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
        throw new Error("El correo ya está registrado");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        role,
    });

    return newUser;
};

const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error("Usuario no encontrado");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Credenciales inválidas");
    }

    const token = generateToken(user);

    return { user, token };
};

module.exports = {
    registerUser,
    loginUser,
};