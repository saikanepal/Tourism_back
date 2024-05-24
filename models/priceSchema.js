// priceUpdateModel.js

const mongoose = require("mongoose");

const priceUpdateSchema = new mongoose.Schema({
  region: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const PriceUpdate = mongoose.model("PriceUpdate", priceUpdateSchema);

module.exports = PriceUpdate;
