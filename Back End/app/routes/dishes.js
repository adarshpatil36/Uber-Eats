const dishes = require("../controllers/dishes");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", dishes.create);

// Retrieve all Tutorials
router.get("/", dishes.findAll);

// Retrieve all published Tutorials
router.get("/published", dishes.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", dishes.findOne);

// Update a Tutorial with id
router.put("/:id", dishes.update);

// Delete a Tutorial with id
router.delete("/:id", dishes.delete);

// Delete all Tutorials
router.delete("/", dishes.deleteAll);

module.exports = router;
