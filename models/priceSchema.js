// priceUpdateModel.js

const mongoose = require("mongoose");

const priceUpdateSchema = new mongoose.Schema(
  {
    region: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const PriceUpdate = mongoose.model("PriceUpdate", priceUpdateSchema);

module.exports = PriceUpdate;
