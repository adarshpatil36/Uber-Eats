const restaurant = require("../controllers/order");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", restaurant.create);

// Retrieve all Tutorials
router.get("/", restaurant.findAll);

// Update a Tutorial with id
router.put("/:id", restaurant.update);

module.exports = router;
