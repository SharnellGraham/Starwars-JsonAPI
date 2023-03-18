const express = require("express");
const router = express.Router();
const starshipController = require("../controllers/starships");

router.get("/starship", starshipController.index);
router.get("/starship/pilot/:pilot", starshipController.showPilot);
router.post("/starship", starshipController.create);
router.put("/starship/pilot/:pilot", starshipController.edit);
router.delete("/starship/pilot/:pilot", starshipController.delete);

module.exports = router;
