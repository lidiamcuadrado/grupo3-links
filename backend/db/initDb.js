// importamos variables de entorno de nuestro fichero .env
require('dotenv').config()

// importamos la función que nos da la conexión con la BDD
const getDb = require('./getDb.js')

// funcion que borrará las tablas de la BDD si existen
const init = async () => {
  let connection;

  try {
    let connection = await getDb();

    console.log('-> DELETING TABLES... <-');

    await connection.query('DROP TABLE IF EXISTS downVotes');
    await connection.query('DROP TABLE IF EXISTS upVotes');
    await connection.query('DROP TABLE IF EXISTS notes');
    await connection.query('DROP TABLE IF EXISTS users');

    console.log('-> CREATING TABLES... <-');

    await connection.query(` 
        CREATE TABLE IF NOT EXISTS users (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            email VARCHAR(100) UNIQUE NOT NULL,
            username VARCHAR(30) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            avatar VARCHAR(100),
            role ENUM('admin', 'normal') DEFAULT 'normal',
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
        )
    `);

    await connection.query(`
        CREATE TABLE IF NOT EXISTS notes (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            userId INT UNSIGNED NOT NULL,
            text VARCHAR(255) NOT NULL,
            image VARCHAR(100),
            url VARCHAR(255),
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(userId) REFERENCES users(id)
        )
    `);

    await connection.query(`
        CREATE TABLE IF NOT EXISTS upVotes (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            userId INT UNSIGNED NOT NULL,
            notesId INT UNSIGNED NOT NULL, 
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(userId) REFERENCES users(id),
            FOREIGN KEY(notesId) REFERENCES notes(id)
        )
    `);

    console.log('¡TABLES SUCCESSFULLY CREATED!');

  } catch (error) {
    console.error(error);
  } finally {
    if (connection) connection.release();
    process.exit();
  }
};

init()