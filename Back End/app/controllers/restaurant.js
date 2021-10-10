const db = require("../models");
const Restaurant = db.restaurant;
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

exports.findAll = (req, res) => {
  Restaurant.findAll()
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

exports.findOne = (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  console.log(name, " ", password);
  Restaurant.findOne({
    where: {
      password: password,
      [Op.or]: [
        {
          name: name,
        },
        {
          email: name,
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
          message: "Invalid Credentials",
        });
      }
    })
    .catch((err) => {
      res.status(200).send({
        message: "Invalid Credentials",
      });
    });
};
exports.update = (req, res) => {};

exports.delete = (req, res) => {};

exports.deleteAll = (req, res) => {};

exports.findAllPublished = (req, res) => {};
