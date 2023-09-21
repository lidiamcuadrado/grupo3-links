// importamos la función que nos permite obtener una conexión con la BDD
const getDb = require('../../db/getDb')


// función que se conectará a la BDD
const selectAllNotesModel = async () => {
    let connection;

try {
    connection = await getDb();

    const [notes] = await connection.query(
        `SELECT * FROM notes`
    )


    return notes;
} finally {
        if (connection) connection.release();
    }
};

module.exports = selectAllNotesModel;