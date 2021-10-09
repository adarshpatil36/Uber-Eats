const customer = require("../controllers/customer");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", customer.create);

router.post("/login", customer.findOne);

// Retrieve all Tutorials
router.get("/", customer.findAll);

// Retrieve all published Tutorials
router.get("/published", customer.findAllPublished);

// Update a Tutorial with id
router.put("/:id", customer.update);

// Delete a Tutorial with id
router.delete("/:id", customer.delete);

// Delete all Tutorials
router.delete("/", customer.deleteAll);

module.exports = router;
