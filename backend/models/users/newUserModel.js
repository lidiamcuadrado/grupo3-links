// importamos las dependencias
const bcrypt = require('bcrypt')

// importamos la función que nos permite obtener una conexión con la BDD
const getDb = require('../../db/getDb');

// Importamos los errores.
const {
  emailAlreadyRegisteredError,
  userAlreadyRegisteredError,
} = require('../../services/errorService');

// función que se conectará a la BDD
const newUserModel = async (username, email, password) => {
    let connection;

    try {
      connection = await getDb();

      // buscamos en la BDD algún usuario con ese email
      let [users] = await connection.query(
        `SELECT id FROM users WHERE email= ?`,
        [email]
      );

      // si existe algun usuario con ese email lanzamos error
      if (users.length > 0) {
        emailAlreadyRegisteredError();
      }

      // buscamos en la BDD algún usuario con ese nombre
      [users] = await connection.query(
        `SELECT id FROM users WHERE username= ?`,
        [username]
      );

      // si existe algun usuario con ese nombre lanzamos error
      if (users.length > 0) {
        userAlreadyRegisteredError()
      }

      // antes de crear el usuario tenemos que encriptar la contraseña
      const hashedPassword = await bcrypt.hash(password, 10)

      // ahora si, podemos crear el usuario
      await connection.query(
        `INSERT INTO users (email, username, password) VALUES (?, ?, ?)`,
        [email, username, hashedPassword]
      );
    } finally {
      if (connection) connection.release();
    }
};

module.exports = newUserModel;