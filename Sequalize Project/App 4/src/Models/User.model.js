// const Sequelize = require('sequelize');
// const db = require('../Config/db');

// const User = db.define('user', {
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     password: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     userName: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     mobile: {
//         type: Sequelize.NUMBER,
//         allowNull: false
//     },
//     contact_email: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });

// module.exports = User;




const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define("user", {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mobile: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  contact_email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


if (User == sequelize.models.User) {
  console.log("True");
}else{
  console.log("False");
}

module.exports = User;