const Models = require('../models/userModel');

const checkIfUserExist = async (email) => {
  const users = await Models.getAll();

  const alreadyExist = users.some((user) => user.email === email);

  if(alreadyExist) return true;

  return false;
}

const getAll = async () => {
  const users = await Models.getAll();

  return users;
}

const createUser = async (name, email, password) => {
  if (await checkIfUserExist(email)) return { code: 400, error: 'User already exist' }

  await Models.createUser(name, email, password);

  return {code: 201, message: 'Usuário criado'};
}

const deleteUser = async (id) => {
  const newUser = await Models.deleteUser(id);

  return { code: 201, message: 'Usuário deletado' }
}

module.exports = {
  getAll,
  createUser,
  deleteUser,
}