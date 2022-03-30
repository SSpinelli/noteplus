const Service = require('../services/userService');

const getAll = async (_req, res) => {
  const users = await Service.getAll();

  res.status(200).json(users)
}

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await Service.createUser(name, email, password);

  if(!!user.error) return res.status(400).json(user);

  return res.status(201).json({ message: 'Usuário criado' });
}

const deleteUser = async (req, res) => {
  const { id } = req.params;

  await Service.deleteUser(id);

  res.status(200).end();
}

module.exports = {
  getAll,
  createUser,
  deleteUser,
}