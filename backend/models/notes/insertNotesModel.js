// importamos la función que nos permite obtener una conexión con la BDD
const getDb = require('../../db/getDb')


// función que se conectará a la BDD
const insertNotesModel = async (text, url, userId) => {
    let connection;

    try {
    connection = await getDb();

    // Creamos notes en la base de datos y obtenemos información sobre su id.
    const [notes] = await connection.query(
        `INSERT INTO notes(text, url, userId) VALUES(?, ?, ?)`,
        [text, url, userId] 
    );
    
    // retornamos el id de la nota (note) que acabamos de crear.
    return notes.insertId;

    
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertNotesModel;