// Importamos los modelos.
const selectUserByIdModel = require('../../models/users/selectUserByIdModel');

// Función controladora final que devuelve los datos de un usuario.
const getUserController = async (req, res, next) => {
    try {
        const user = await selectUserByIdModel(req.user.id);

        res.send({
            status: 'ok',
            data: {
                user,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = getUserController;