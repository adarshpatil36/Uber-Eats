const db = require("../models");
const Order = db.order;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  console.log("In create func", req.body);

  // Validate request
  if (!req.body.user) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const order = {
    restid: req.body.restid,
    userid: req.body.userid,
    deliveryAddress: req.body.deliveryAddress,
    totalAmount: req.body.totalAmount,
    OrderTime: req.body.OrderTime,
  };

  Order.create(order)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Order.",
      });
    });
};

// Retrieve all Orders from the database.
exports.findAll = (req, res) => {};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
