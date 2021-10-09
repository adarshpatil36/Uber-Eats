const db = require("../models");
const Customer = db.customer;
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

  const customer = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    user: req.body.user,
    email: req.body.email,
    password: req.body.password,
    contact: req.body.contact,
    profilePic: req.body.profilePic,
    country: req.body.country,
    isRestaurant: req.body.isRestaurant || 0,
  };

  // Save Tutorial in the database
  Customer.create(customer)
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

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {};

// Find a single Tutorial with an id

exports.findOne = (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  Customer.findOne({
    where: {
      password: password,
      [Op.or]: [
        {
          user: user,
        },
        {
          email: user,
        },
      ],
    },
  })
    .then((data) => {
      if (data) {
        const { password, ...postData } = data.dataValues;
        res.send(postData);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
