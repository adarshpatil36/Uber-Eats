const restaurant = require("../controllers/restaurant");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", restaurant.create);

router.post("/login", restaurant.findOne);

// Retrieve all Tutorials
router.get("/", restaurant.findAll);

// Update a Tutorial with id
router.put("/:id", restaurant.update);

module.exports = router;
