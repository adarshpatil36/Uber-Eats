const dishes = require("../controllers/dishes");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", dishes.create);

// router.post("/updateDish", dishes.bulkCreate);
router.post("/updateDish", dishes.update);

// Retrieve all Tutorials
router.get("/:restaurant", dishes.findAll);

// Retrieve all published Tutorials
router.get("/published", dishes.findAllPublished);

// Update a Tutorial with id
router.put("/:id", dishes.update);

// Delete a Tutorial with id
router.delete("/:id", dishes.delete);

// Delete all Tutorials
router.delete("/", dishes.deleteAll);

module.exports = router;
