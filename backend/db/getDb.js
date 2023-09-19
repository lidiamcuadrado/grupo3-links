// importamos las dependencias
const mysql = require('mysql2/promise');

// obtenemos las variables de entorno necesarias con destructuring
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env
// variable que almacenará un grupo de conexiones
let pool;

// funcion que retorna una conexión con la BDD
const getDb = async () => {
  try {
    if (!pool) {
      const connection = await mysql.createConnection({
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        timezone: 'Z',
      })

      await connection.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE}`)

      pool = mysql.createPool({
        connectionLimit: 10,
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DATABASE,
        timezone: 'Z',
      })
    }

      return await pool.getConnection();
  } catch (err) {
    console.error(err)
  }
}

module.exports = getDb