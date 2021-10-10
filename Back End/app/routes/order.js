const order = require("../controllers/order");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", order.create);

// Retrieve all Tutorials
router.get("/:userId", order.findAll);

// Update a Tutorial with id
router.put("/:id", order.update);

module.exports = router;
