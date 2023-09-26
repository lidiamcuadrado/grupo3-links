// Importamos las dependencias.
const joi = require('joi');

// Importamos el objeto con los mensajes de error personalizados.
const joiErrorMessages = require('../joiErrorMessages');


// Creamos el esquema de validación.
const newNotesSchema = joi.object({
  text: joi.string().required().messages(joiErrorMessages),
  url: joi.string().required().messages(joiErrorMessages),
});

module.exports = newNotesSchema;
