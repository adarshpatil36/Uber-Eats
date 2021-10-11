const db = require("../models");
const Order = db.order;
const OrderItem = db.orderItem;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = async (req, res) => {
  console.log("In create func", req.body);

  // Validate request
  if (!req.body.restid) {
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

  const orderItem = req.body.orderItems;

  const orderData = await Order.create(order)
    .then((data) => {
      // res.send(data);
      return data;
    })
    .catch((err) => {});

  orderItems = orderItem.map((item) => {
    let orderId = orderData.id;
    return { orderId: orderId, ...item };
  });

  OrderItem.bulkCreate(orderItems)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Order.",
      });
    });
};

const { QueryTypes } = require("sequelize");

// Retrieve all Orders from the database.
// "SELECT * FROM restaurants INNER JOIN (SELECT dishId,	orderId,	quantity,restid,	userid,	deliveryAddress	,totalAmount,	orderTime FROM orderItems INNER JOIN orders ON orders.id=orderItems.orderId) AS A ON A.restid=restaurants.id",

exports.findAll = async (req, res) => {
  const userId = req.params.userId;
  const users = await db.sequelize.query(
    "SELECT * FROM restaurants INNER JOIN (SELECT dishId,	price, orderId, name as dishName,	quantity,restid,	userid,	deliveryAddress	,totalAmount,	orderTime FROM orderItems INNER JOIN orders ON orders.id=orderItems.orderId INNER JOIN dishes ON dishes.id=orderItems.dishId) AS A ON A.restid=restaurants.id",
    {
      type: QueryTypes.SELECT,
    }
  );
  res.send(users);
};

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
