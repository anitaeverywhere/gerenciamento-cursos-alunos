const User = require('../models/userModel');

exports.createUser = async (data) => {
  const user = new User(data);
  return await user.save();
};

exports.getUsers = async () => {
  return await User.find();
};

exports.getUserById = async (id) => {
  return await User.findById(id);
};

exports.deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};