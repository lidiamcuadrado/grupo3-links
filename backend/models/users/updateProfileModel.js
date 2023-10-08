const getDB = require('../../db/getDb');
const bcrypt = require('bcrypt');

async function getUserById(userId) {
  const connection = await getDB();
  try {
    const [userData] = await connection.query('SELECT * FROM users WHERE id = ?', [userId]);
    return userData[0];
  } finally {
    connection.release();
  }
}

async function updateProfileModel(userId, updatedData) {
  const connection = await getDB();
  try {
        if (updatedData.password) {
      // Encriptar la nueva contraseña
      const hashedPassword = await bcrypt.hash(updatedData.password, 10);
      // Actualizar el perfil del usuario con la nueva contraseña encriptada
    await connection.query('UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?',  [ 
      updatedData.username, 
      updatedData.email, 
      hashedPassword, 
      userId, 
    ]); 
    } else {
      // Si no se proporcionó una nueva contraseña, actualizar el perfil sin modificar la contraseña
      await connection.query(
        'UPDATE users SET username = ?, email = ? WHERE id = ?',
        [updatedData.username, updatedData.email, userId]
      );
    }
  } finally {
    connection.release();
  }
}

module.exports = { getUserById, updateProfileModel };