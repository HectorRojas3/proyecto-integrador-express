const express = require("express");
const listEditRouter = express.Router();

//ruta para crear nueva tarea
listEditRouter.post('/create', (req, res) => {
    res.send('tarea creada exitosamente');
});

//ruta para eliminar tarea
listEditRouter.delete('/delete/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    res.send(`se elimino la tarea ${taskId}`);
});

//ruta para actualizar una tarea
listEditRouter.put('/update/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    res.send(`se actualizo es estatus de la tarea ${taskId} `);
});

module.exports = listEditRouter;