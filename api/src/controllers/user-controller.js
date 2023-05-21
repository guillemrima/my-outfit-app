const db = require('../models')
const User = db.User
const Op = db.Sequelize.Op;

exports.create = (req, res)  => {
    User.create(req.body).then(data => {
        res.status(200).send(
            '✔️ La petición POST ha llegado y se ha registrado correctamente a la base de datos'
        );
    }).catch(err => {
        if(err.errors){
            res.status(422).send({
                message: err.errors
            })
        }else {
            res.status(500).send({
                message: '❌ Ha ocurrido algún error al realizar la petición POST'
            })
        }
    })
};

exports.findAll = (req, res) => {

    let page = req.query.page || 1;
    let limit = parseInt(req.query.size) || 10;
    let offset = (page - 1) * limit;

    let whereStatement = {};
    let condition = Object.keys(whereStatement).length > 0 ? {[Op.and]: [whereStatement]} : {};

    User.findAndCountAll({
        where: condition, 
        attributes: ['id', 'username', 'email', 'password'],
        limit: limit,
        offset: offset,
        order: [['createdAt', 'DESC']]
    })
    .then(result => {

        result.meta = {
            total: result.count,
            pages: Math.ceil(result.count / limit),
            currentPage: page
        };

        res.status(200).send(result);

    }).catch(err => {
        res.status(500).send({
            message: err.errors || "❌ Ha ocurrido algún error al realizar la petición GET"
        });
    });
};

