// Importamos las dependencias.
const joi = require('joi');

// Importamos el objeto con los mensajes de error personalizados.
const joiErrorMessages = require('./joiErrorMessages');

// Creamos un esquema para validar imágenes. De esta forma podremos reutilizar este esquema
// en los esquemas de validación de los endpoints que requieran imágenes.
const imgSchema = joi
    .object({
        name: joi.string().required().messages(joiErrorMessages),
        mimetype: joi
            .string()
            .valid('image/jpeg', 'image/png')
            .required()
            .messages(joiErrorMessages),
        size: joi.number().max(5000000).required().messages(joiErrorMessages),
    })
    .unknown(true);

module.exports = imgSchema;
