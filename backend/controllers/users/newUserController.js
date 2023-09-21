// importamos los modelos
const newUserModel = require('../../models/users/newUserModel');

// Importamos los errores.
const { missingFieldsError } = require('../../services/errorService');

//Importamos la función que valida los esquemas
const validateSchema = require('../../utils/validateSchema');

//Importamos el esquema de Joi
const newUserSchema = require('../../schemas/users/newUserSchema');

// función controladora final que insterta un nuevo usuario
const newUserController = async (req, res, next) => {
  try {
    // importamos los datos del body
    const { username, email, password } = req.body;

    await validateSchema(newUserSchema, req.body);

    // si falta algún campo lanzamos error
    if (!username || !email || !password) {
      missingFieldsError();
    }

    // insertamos el usuario
    await newUserModel(username, email, password);

    res.send({
      status: 'Ok',
      message: 'User created successfully',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = newUserController;
