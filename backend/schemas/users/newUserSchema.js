// Importamos las dependencias.
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity')

const complexityOptions = {
  min: 8,
  max: 30,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
};

// Importamos el objeto con los mensajes de error personalizados.
const joiErrorMessages = require('../joiErrorMessages');

// Creamos el esquema de validación.
const newUserSchema = joi.object({
  username: joi.string().required().messages(joiErrorMessages),
  email: joi.string().email().required().messages(joiErrorMessages),
  password: passwordComplexity(complexityOptions).messages(joiErrorMessages),
});

module.exports = newUserSchema;
