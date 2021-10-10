const db = require("../models");
const Address = db.address;
const Op = db.Sequelize.Op;

// Create and Save a new Address
exports.create = (req, res) => {
  console.log("In create func", req.body);

  // Validate request
  if (!req.body.userId) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const address = {
    type: req.body.type,
    address: req.body.address,
    userId: req.body.userId,
  };

  // Save Tutorial in the database
  Address.create(address)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};
exports.findAll = (req, res) => {
  const userId = req.params.userId;
  console.log("UserID ", userId);
  Address.findAll({ where: { userId: userId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
