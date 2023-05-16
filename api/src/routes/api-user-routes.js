const { QueryError} = require('sequelize');

module.exports = (app, upload) => {
    const router = require('express').Router();
    const controller = require('../controllers/user-controller.js');

    app.use(function(req, res, next) {
        res.header(
            'Acces-Control-Allow-Headers',
            'Authorization, Origin, Content-Type, Accept'
        );
        next();
    });

    router.get('/', controller.register_user)

    app.use('/api/user', router)
}    
