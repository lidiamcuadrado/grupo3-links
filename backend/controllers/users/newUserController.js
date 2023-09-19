// importamos los modelos
const newUserModel = require('../../models/users/newUserModel');

// función controladora final que insterta un nuevo usuario
const newUserController = async (req, res, next) => {
  try {
    // importamos los datos del body
    const { username, email, password } = req.body;

    // si falta algún campo lanzamos error
    if (!username || !email || !password) {
      const err = new Error('Empty fields');
      err.httpStatus = 400;
      throw err;
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
