const db = require('../models/');
const User = db.User;
const Op = db.Sequelize.Op;

const validateUserExistence = async (req, res, next) => {
    try {
        const email = req.body.email;
        const existingUser = await User.findOne({where: { email }});

        if (existingUser) {
            return res.status(400).json({message: 'Ya se ha registrado un usuario con este email'})
        }
        next();
    } catch (error) {
        console.error('Error al validar el email:', error)
        res.status(500).json({message: 'Error de servidor'})
    }
}

module.exports = validateUserExistence