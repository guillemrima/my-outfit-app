const { QueryError} = require('sequelize');
const validateUserExistence = require('../middlewares/validate-user-existence-middleware')

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

    router.post('/', validateUserExistence, controller.create)
    router.get('/', controller.findAll);
    
    app.use('/api/users', router)
}    
