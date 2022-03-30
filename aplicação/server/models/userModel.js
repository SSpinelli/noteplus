const connection = require('./connection');

const createUser = async (name, email, password) => {
  connection.execute(
    `INSERT INTO login_system.users (name, email, password) VALUES (?,?,?)`,
    [name, email, password],
  );
}

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM login_system.users' 
  )

  return users;
}

const deleteUser = async (id) => {
  const [user] = await connection.execute(
    'DELETE FROM login_system.users WHERE id=?', [id]
  )

  return user;
}

module.exports = {
  createUser,
  getAll,
  deleteUser,
};