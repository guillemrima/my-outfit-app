const { QueryError} = require('sequelize');

module.exports = (app, upload) => {
    const router = require('express').Router();
    const controller = ''; //POSTERIORMENTE DECLARAR EL CONTROLADOR DE ESTE ENRUTADOR

    app.use(function(req, res, next) {
        res.header(
            'Acces-Control-Allow-Headers',
            'Authorization, Origin, Content-Type, Accept'
        );
        next();
    });

    router.get('/', () => {
        console.log("hola mundo")
    })


    app.use('/api/register', router)
}    
