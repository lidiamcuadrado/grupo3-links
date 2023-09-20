// Importamos los modelos.
const selectUserByIdModel = require('../../models/users/selectUserByIdModel');
const updateAvatarModel = require('../../models/users/updateAvatarModel');

// Importamos la función que valida los esquemas y las funciones que guardan y eliminan fotos
// del disco.
const validateSchema = require('../../utils/validateSchema');
const savePhoto = require('../../utils/savePhoto');
const deletePhoto = require('../../utils/deletePhoto');

// Importamos el esquema de Joi.
const editAvatarSchema = require('../../schemas/users/editAvatarSchema');

// Función controladora final que edita el avatar de un usuario.
const editAvatarController = async (req, res, next) => {
    try {
        // Validamos los datos de files con joi. Si files no existe enviamos un objeto vacío.
        await validateSchema(editAvatarSchema, req.files || {});

        // Obtenemos los datos del usuario para ver si tiene un avatar previo.
        const user = await selectUserByIdModel(req.user.id);

        // Si el usuario tiene un avatar asignado lo eliminamos de la carpeta "uploads".
        if (user.avatar) {
            await deletePhoto(user.avatar);
        }

        // Variable donde almacenamos el nombre con el que vamos a guardar el avatar en la
        // carpeta "uploads".
        const avatarName = await savePhoto(req.files.avatar, 150);

        // Actualizamos el avatar del usuario en la base de datos.
        await updateAvatarModel(avatarName, req.user.id);

        res.send({
            status: 'ok',
            message: 'Usuario actualizado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = editAvatarController;
