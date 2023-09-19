const express = require('express');
const app = express();
const port = 8000;

//lista de tareas 
const tasks = [
    { id: 1, 
        isCompleted: false,
        description: "Presentar entregable de node.js"
    }, 
    { id: 2, 
        isCompleted: true, 
        description: "Preparar la cena" 
    },
    { id: 3, 
        isCompleted: true, 
        description: "Leer 10 páginas de hábitos atómicos" 
    }
];

//ruta para solicitar la lista en formato json
app.get('/tasks', (_req, res) => {
    res.json(tasks);
});

//iniciando el servidor
app.listen(port, () => {
    console.log(`El servidor escucha en el puerto http://localhost:${port}`);
});