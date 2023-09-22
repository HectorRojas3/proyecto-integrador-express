const express = require("express");
const listEditRouter = express.Router();
//importando manejador de errores
const errorHandler = require('../middlewares/error-handler')

//ruta para crear nueva tarea
listEditRouter.post('/create', (req, res, next) => {
    //validacion y confirmacion para crear una tarea
    try {
        if (!req.body || !req.body.description) {
            const error = new Error('falta la descripcion de la tarea');
            error.status(400);
        }
        //crear tarea
        res.send('tarea creada exitosamente');
    } catch (error) {
        //pasar error al middleware de manejo de errores
        next(error);
    }
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

//middleware de manejo de errores en el router
listEditRouter.use(errorHandler);

module.exports = listEditRouter;