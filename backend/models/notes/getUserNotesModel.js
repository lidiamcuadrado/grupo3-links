const getDb = require("../../db/getDb");

const getUserNotesModel = async (userId) => {
  let connection;
  try {
    connection = await getDb();

    console.log(userId);

    const query = `
      SELECT notes.id, notes.title, notes.text, notes.url, notes.createdAt COUNT(upVotes.id) AS votes, users.username, users.avatar
      FROM notes
      LEFT JOIN upVotes ON notes.id = upVotes.notesId
      INNER JOIN users ON notes.userId = users.id
      WHERE users.id = ?
      GROUP BY notes.id
    `;

    const [queryes] = await connection.query(query, [userId]);

    return queryes
  
  } finally {
    if (connection) connection.release();
  }
};

module.exports = getUserNotesModel;