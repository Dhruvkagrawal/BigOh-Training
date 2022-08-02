const User = require("../Models/User.model");

var userDao = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateUser: updateUser,
};

function findAll() {
  return User.findAll();
}

function findById(id) {
  return User.findByPk(id);
}

function deleteById(id) {
  return User.destroy({ where: { id: id } });
}

function create(user) {
  var newUser= new User(user);
  return newUser.save();
}

function updateUser(User, id) {
  var updateUser = {
    name: User.name,
    password: User.password,
    userName: User.userName,
    mobile: User.mobile,
    contact_email: User.contact_email,
  };
  return User.update(updateUser, { where: { id: id } });
}
module.exports = userDao;
