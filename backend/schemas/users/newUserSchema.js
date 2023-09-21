// Importamos las dependencias.
const joi = require('joi');

// Importamos el objeto con los mensajes de error personalizados.
const joiErrorMessages = require('../joiErrorMessages');

// Creamos el esquema de validación.
const newUserSchema = joi.object({
  username: joi.string().required().messages(joiErrorMessages),
  email: joi.string().email().required().messages(joiErrorMessages),
  password: joi
    .string()
    .min(8) // Exige mínimo 8 caracteres de contraseña
    .max(100)
    .regex(
      /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[¡!$%^&()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9¡!$%^&()_+|~=`{}:";'<>¿?,.]{8,}$/
    )
    .required()
    .messages(joiErrorMessages),
});

module.exports = newUserSchema;
