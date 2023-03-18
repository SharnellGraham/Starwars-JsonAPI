const express = require("express");
const router = express.Router();
const characterController = require("../controllers/character.js");

router.get("/",characterController.index);
router.get("/name/:name", characterController.showName);
router.post("/", characterController.create);
router.patch("/name/:name", characterController.edit);
router.delete("/name/:name", characterController.delete);

module.exports = router;