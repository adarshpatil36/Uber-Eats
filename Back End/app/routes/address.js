const address = require("../controllers/address");

var router = require("express").Router();

router.post("/", address.create);

router.get("/:userId", address.findAll);

module.exports = router;
