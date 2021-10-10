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

exports.findAll = (req, res) => {};

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
        res.status(200).send({
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
