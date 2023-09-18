import mysql from 'mysql2/promise'

import { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } from '../config.js'

let pool;

const getConnection = async () => {
  try {
    if (!pool) {
      // Creamos una conexión con el servidor MySQL.
      const connection = await mysql.createConnection({
          host: MYSQL_HOST,
          user: MYSQL_USER,
          password: MYSQL_PASSWORD,
          timezone: 'Z',
      });

      await connection.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE}`);

      pool = await mysql.createPool({
        connectionLimit: 10,
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DATABASE,
        timezone: "Z",
      });
    }

    return await pool.getConnection();
  } catch {
    throw new Error("Error connecting to MySQL or database not found");
  }
};

export default getConnection
