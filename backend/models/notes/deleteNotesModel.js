// Importamos la función que nos permite obtener una conexión a la base de datos.
const getDb = require('../../db/getDb');

// Importamos las funciones de error.
const { unauthorizedUserError } = require('../../services/errorService');

// Función que se conectará a la base de datos y eliminará un tweet.
const deleteNotesModel = async (notesId, userId) => {
    let connection;

    try {
        connection = await getDb();

        const [notes] = await connection.query(
            `SELECT userId FROM notes WHERE id = ?`,
            [notesId]
        );

        // Si no somos los dueños del tweet lanzamos un error.
        if (notes[0].userId !== userId) {
            unauthorizedUserError();
        }

        // Eliminamos los likes del tweet antes de borrar al tweet, de lo contrario SQL
        // no nos dejará eliminar el tweet.
        await connection.query(`DELETE FROM upVotes WHERE notesId = ?`, [
            notesId,
        ]);

        // Eliminamos el tweet.
        await connection.query(`DELETE FROM notes WHERE id = ?`, [notesId]);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deleteNotesModel;
