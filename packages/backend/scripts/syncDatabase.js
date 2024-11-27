const { sequelize } = require('../models'); // Asegúrate de que esto apunte correctamente a tu instancia Sequelize

(async () => {
    try {
        await sequelize.sync({ force: false }); // Cambiar a true si deseas sobrescribir las tablas existentes
        console.log('Tablas sincronizadas con éxito.');
        process.exit(0);
    } catch (error) {
        console.error('Error sincronizando las tablas:', error);
        process.exit(1);
    }
})();
