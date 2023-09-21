const getDb = require("../../db/getDb");
const { likeAlreadyExistsError } = require("../../services/errorService");

const insertVoteModel = async (notesId, userId) => {
    let connection;

    try {
        connection = await getDb();

        // comprobamos si el usuario ya ha votado

        // "You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'FROM upVotes WHERE notesId = NULL AND userId = 1' at line 1"

        const [upVotes] = await connection.query(
            `SELECT id FROM upVotes WHERE notesId = ? AND userId = ?`,
            [notesId, userId]
        )

        if (upVotes.length > 0) {
            // hay que cambiarlo!!
            likeAlreadyExistsError()
        }
        
        await connection.query(
            `INSERT INTO upVotes(notesId, userId) VALUES(?, ?)`,
            [notesId, userId]
        )
    } finally {
        if (connection) connection.release()
    }
}

module.exports = insertVoteModel;