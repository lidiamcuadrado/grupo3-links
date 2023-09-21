// Importamos las dependencias.
const joi = require('joi');

// Importamos el objeto con los mensajes de error personalizados.
const joiErrorMessages = require('../joiErrorMessages');

// Importamos el esquema de la imagen.
const imgSchema = require('../imgSchema');

// Creamos el esquema de validación.
const newNotesSchema = joi.object({
  text: joi.string().required().messages(joiErrorMessages),
  image: imgSchema.optional().messages(joiErrorMessages),
});

module.exports = newNotesSchema;
