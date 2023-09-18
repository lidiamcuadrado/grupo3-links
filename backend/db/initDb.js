require("dotenv").config();
const { getConnection } = require("./db.js");

async function main() {
  let connection;
  try {
    connection = await getConnection();
    console.log(getConnection);

    //Borrar tablas
    console.log("Borrando tablas si existen...");
    connection.query(`DROP TABLE IF EXISTS categories, users, notes`);

    console.log("Creando tablas...");
    await connection.query(`
    CREATE TABLE users(
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );
    `);

    await connection.query(`
    CREATE TABLE categories(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    name VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(id)
    );
    `);

    await connection.query(`
    CREATE TABLE notes(
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            title VARCHAR(100),
            text VARCHAR(255),
            category INT,
            public BOOLEAN DEFAULT 0,
            image VARCHAR(100),
            FOREIGN KEY( user_id) REFERENCES users(id) ON DELETE CASCADE,
            FOREIGN KEY (category) REFERENCES categories(id) ON DELETE SET NULL

    );
    `);

    console.log("Tablas creadas");
  } catch (e) {
    console.log(e.message);
  } finally {
    if (connection) {
      connection.release();
    }
    process.exit();
  }
}

main();
