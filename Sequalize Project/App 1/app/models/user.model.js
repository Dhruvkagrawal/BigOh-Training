let { Sequelize, Model } = require("sequelize");

let sequelize = require("./db");

class User extends Model {}

let userSchema = {
  name: {
    type: sequelize.STRING,
    allowNull: false,
    force: true,
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
    force: true,
    unique: true,
  },
  userName: {
    type: sequelize.STRING,
    allowNull: false,
    force: true,
    unique: true,
  },
};

User.init(userSchema, {
  sequelize,
  className: "users",
});

module.exports = User;
