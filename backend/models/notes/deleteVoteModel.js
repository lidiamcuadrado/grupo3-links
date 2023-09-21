const getDb = require("../../db/getDb");
const { notFoundError } = require("../../services/errorService");

const deleteVotesModel = async (notesId, userId) => {
    let connection;

    try {
        connection= await getDb();

        // funcion que se conectara a la base de datos y eliminara un nuevo voto
        const [upVotes] = await connection.query(
            `SELECT id FROM upVotes WHERE notesId = ? AND userId = ?`,
            [notesId, userId]
        )

        if (upVotes.length < 1) {
            // hay que cambiarlo!!
            notFoundError('upVotes')
        }
        
        await connection.query(
            `DELETE FROM upVotes WHERE notesId = ? AND userId = ?`,
            [notesId, userId]
        )
    } finally {
        if (connection) connection.release()
    }
}

module.exports = deleteVotesModel;