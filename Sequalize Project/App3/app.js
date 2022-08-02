const Sequelize = require("sequelize");
const sequelize = new Sequelize('Instagram', 'postgres', 'root', {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 9,
    min: 1,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database is connected successfully");
  })
  let posts = Sequelize.define('posts', {
    title: c4c4]
  09  })
  .catch((error) => {
    console.log("Error", error);
  });