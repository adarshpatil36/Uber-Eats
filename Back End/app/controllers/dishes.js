const db = require("../models");
const Dishes = db.dishes;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  console.log("In create func", req.body);

  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const dishes = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    rating: req.body.rating,
    imageURL: req.body.imageURL,
    restaurant: req.body.restaurant,
  };

  Dishes.create(dishes)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Order.",
      });
    });
};

exports.bulkCreate = (req, res) => {
  const dishes = req.body;
  console.log(">> ", dishes);

  Dishes.bulkCreate(dishes, { updateOnDuplicate: ["id"] })
    .then((dataDB) => {
      console.log(">> ", dataDB);
      res.send(dataDB);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.findAll = (req, res) => {
  const restaurant = req.params.restaurant;
  console.log(">> ", restaurant);

  Dishes.findAll({
    where: {
      restaurant: restaurant,
    },
  })
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

// Find a single Tutorial with an id
exports.findOne = (req, res) => {};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.body.id;

  Dishes.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Dish was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
