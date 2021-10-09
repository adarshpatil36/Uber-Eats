const db = require("../models");
const Restaurant = db.restaurant;
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

  const restaurant = {
    name: req.body.name,
    tags: req.body.tags,
    address: req.body.address,
    description: req.body.description,
    timings: req.body.timings,
    rating: req.body.rating,
    email: req.body.email,
    password: req.body.password,
    contact: req.body.contact,
    country: req.body.country,
    restaurantPic: req.body.restaurantPic,
    isRestaurant: req.body.isRestaurant,
  };

  // Save Tutorial in the database
  Restaurant.create(restaurant)
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
exports.findOne = (req, res) => {};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
