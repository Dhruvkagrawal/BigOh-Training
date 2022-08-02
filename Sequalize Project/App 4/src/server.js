const express = require("express");
const app = express();
const db = require("./Config/db");
const userRoutes = require('./routes/user.Routes');

app.use('/user', userRoutes);

db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

const start = async (PORT) => {
  app.listen(PORT, () => {
    console.log("Current Server is Running on PORT", PORT);
  });
};

module.exports = start;