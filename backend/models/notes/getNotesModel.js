const getDb = require("../../db/getDb");

const getNotesModel = async () => {
  let connection;
  try {
    connection = await getDb();

    const query = `
      SELECT notes.id, notes.text, notes.image, notes.url, COUNT(upVotes.id) AS likes, users.username, users.avatar
      FROM notes
      LEFT JOIN upVotes ON notes.id = upVotes.notesId
      INNER JOIN users ON notes.userId = users.id
      GROUP BY notes.id
    `;

    const [queryes] = await connection.query(query);

    return queryes
  
  } finally {
    if (connection) connection.release();
  }
};

module.exports = getNotesModel;