const roleMiddleware = (requiredRole) => (req, res, next) => {
    if (req.user.role !== requiredRole) {
        return res.status(403).json({ message: "Acceso denegado. Rol insuficiente." });
    }
    next();
};

module.exports = roleMiddleware;