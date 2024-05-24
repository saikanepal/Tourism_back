// priceUpdateRoutes.js

const express = require("express");
const router = express.Router();
const priceUpdateController = require("../Controller/PriceUpdateController");

// POST route to create a new Price Update
router.post("/updatePrice", priceUpdateController.createPriceUpdate);
router.get("/getPrice", priceUpdateController.getPrice);

module.exports = router;
