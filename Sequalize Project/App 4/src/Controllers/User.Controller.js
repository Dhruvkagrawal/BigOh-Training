const userDao = require("../Dao/User.Dao");

var userController = {
  addUser: addUser,
  findUsers: findUsers,
  findUserById: findUserById,
  updateUser: updateUser,
  deleteById: deleteById,
};

function addUser(req, res) {
  let user = req.body
  // let user= {
  //   id: 1,
  //   name: "Dhruv Kumar Agrawal",
  //   password: "123456",
  //   userName: "DKA1999",
  //   mobile: "8955064674",
  //   contact_email: "dhruvkumaragraal7@gmail.com",
  // };
  userDao
    .create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function findUserById(req, res) {
  userDao
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteById(req, res) {
  userDao
    .deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Gig deleted successfully",
        gig: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateUser(req, res) {
  userDao
    .updateGig(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Gig updated successfully",
        gig: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function findUsers(req, res) {
  userDao
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = userController;