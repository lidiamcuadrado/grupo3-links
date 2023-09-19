// Importamos la función que nos permite obtener una conexión a a base de datos.
const getDb = require('../../db/getDb');

// Importamos las funciones de error.
const { invalidCredentialsError } = require('../../services/errorService');


const selectUserByEmail = async (email) => {
    let connection;

    try {
        connection = await getDb();

        // Localizamos el usuaruo con el email dado.
        const [users] = await connection.query(
        `SELECT ID, password, role FROM users WHERE email = ?`,
        [email]
);

        // Si no hay ningú usuario con ese email lanzamos un error.
        if(users.length < 1) {
            invalidCredentialsError();
        }

    // Dado que no puede existir más de un usuario con un email determinado, en caso de que el array de usuarios haya algún usuario este estará en la posición 0.
    return users[0];
} finally {
    if (connection) connection.releaase();
    }
};

module.exports = selectUserByEmail;