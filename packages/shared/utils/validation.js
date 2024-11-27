// Validar un correo electrónico
const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Validar que una cadena no esté vacía
const isNonEmptyString = (value) => {
    return typeof value === "string" && value.trim().length > 0;
};

module.exports = {
    isEmailValid,
    isNonEmptyString,
};