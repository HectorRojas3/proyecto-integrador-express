function errorHandler (err, req, res, next) {
    console.error(err.stack);
}

//configuracion de status code segun la peticion y error
if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    //manejo para error de solicitud POST json vacio o informacion no valida
    res.status(400).json({error: 'Informacion no valida o falta informacion'});
} else if (err instanceof Error && err.status === 400) {
    //manejo para error de solicitud PUT no validas
    res.status(400).json({error: err.message});
} else {
    //error para otro tipo de solicitud
    next(err);
}

module.exports = errorHandler;