const getDB = require('../../db/getDb');

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
    await connection.query('UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?',  [ 
      updatedData.username, 
      updatedData.email, 
      updatedData.password, 
      userId, 
    ]); 
  } finally {
    connection.release();
  }
}

module.exports = { getUserById, updateProfileModel };