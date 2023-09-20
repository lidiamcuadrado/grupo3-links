// Importamos las dependencias.
const joi = require('joi');

// Importamos el objeto con los mensajes de error personalizados.
const joiErrorMessages = require('../joiErrorMessages');

// Importamos el esquema de la imagen.
const imgSchema = require('../imgSchema');

// Creamos el esquema de validación.
const editAvatarSchema = joi.object({
    avatar: imgSchema.required().messages(joiErrorMessages),
});

module.exports = editAvatarSchema;
