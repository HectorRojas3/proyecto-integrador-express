const express = require("express");
const listViewRouter = express.Router();

//definiendo ruta para listar tareas completadas
listViewRouter.get('/completed', (_req, res) => {
    //filtro para mostrar tareas completas
    const completedTasks = tasks.filter(task => task.isCompleted);
    res.json(completedTasks);
})

module.exports = listViewRouter;