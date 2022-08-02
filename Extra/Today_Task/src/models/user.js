// const Sequelize = require("sequelize")
// const Userinfo = require('../models/userinfo');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    mobileNumber: DataTypes.BIGINT,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, 
  {})
    User.associate = (models) => {
      User.hasOne(models.Userinfo)
    };
  return User;
};