// Importamos las dependencias.
const joi = require('joi');

// Importamos el objeto con los mensajes de error personalizados.
const joiErrorMessages = require('../joiErrorMessages');

// Creamos el esquema de validación.
const loginUserSchema = joi.object({
  email: joi.string().email().required().messages(joiErrorMessages),
  password: joi.string().required().messages(joiErrorMessages),
});

module.exports = loginUserSchema;
