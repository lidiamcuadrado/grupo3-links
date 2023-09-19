// importamos los modelos
const newUserModel = require('../../models/users/newUserModel');

// Importamos los errores.
const { missingFieldsError } = require('../../services/errorService');

// función controladora final que insterta un nuevo usuario
const newUserController = async (req, res, next) => {
  try {
    // importamos los datos del body
    const { username, email, password } = req.body;

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
