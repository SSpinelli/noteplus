const connection = require('./connection');

const createUser = async (name, email, password) => {
  connection.execute(
    'INSERT INTO login_system.users (name, email, password) VALUES (?,?,?)',
    [name, email, password],
  );
}

module.exports = {
  createUser,
};