const cleanExpiredQr = require("../tasks/cleanExpiredQr");
const deactivateExpiredUsers = require("../tasks/deactivateExpiredUsers");
const deleteExpiredUsers = require("../tasks/deleteExpiredUsers");

const executeTasks = async () => {
    console.log("Ejecutando tareas manualmente...");
    await cleanExpiredQr();
    await deactivateExpiredUsers();
    await deleteExpiredUsers();
    console.log("Tareas completadas.");
};

executeTasks();

//para ejecutar: node scripts/executeTasks.js

