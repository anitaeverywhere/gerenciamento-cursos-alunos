
const userService = require('../services/userService');

exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar usuário' });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar usuários' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: 'Erro ao deletar usuário' });
  }
};
