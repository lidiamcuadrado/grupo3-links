// Importamos los modelos.
const selectUserByIdModel = require('../../models/users/selectUserByIdModel');
const getUserNotesModel = require('../../models/notes/getUserNotesModel')

// Función controladora final que devuelve los datos de un usuario.
const getPublicUserController = async (req, res, next) => {
    try {
        // Obtenemos el id del usuario.
        const { userId } = req.params


        const user = await selectUserByIdModel(userId);
        const notes = await getUserNotesModel(userId);

        console.log(user);

        delete user.email;

        res.send({
            status: 'ok',
            data: {
                user: {
                    ...user,
                    notes
                },
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = getPublicUserController;