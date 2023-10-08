const getDb = require("../../db/getDb");

// Función que se conectará a la base de datos y devolverá todos los tweets.
const getNotesModel = async (keyword = '', userId = 0) => {
    let connection;

    try {
        connection = await getDb();

        const [notes] = await connection.query(
            `
                SELECT 
                    t.id,
                    t.text,
                    t.title,
                    t.url,
                    u.avatar,
                    t.userId,
                    u.username,
                    t.userId = ? AS owner,
                    COUNT(l.id) AS votes,
                    t.createdAt
                FROM notes t
                INNER JOIN users u ON u.id = t.userId
                LEFT JOIN upVotes l ON l.notesId = t.id
                WHERE u.username LIKE ? OR t.text LIKE ?
                GROUP BY t.id;
            `,
            [userId, userId, `%${keyword}%`, `%${keyword}%`]
        );

        return notes;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getNotesModel;