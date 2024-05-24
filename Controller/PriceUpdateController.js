// // priceUpdateController.js

// const PriceUpdate = require("../models/priceSchema");

// // Controller function to handle POST request for Price Update
// const createPriceUpdate = async (req, res) => {
//   try {
//     const { region, price } = req.body;

//     // Create a new Price Update instance
//     const newPriceUpdate = new PriceUpdate({ region, price });

//     // Save the new Price Update
//     await newPriceUpdate.save();

//     res.status(201).json({
//       message: "Price updated successfully!",
//       data: newPriceUpdate,
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({
//       message: "Failed to update price. Please try again.",
//     });
//   }
// };

// module.exports = {
//   createPriceUpdate,
// };

// priceUpdateController.js

const PriceUpdate = require("../models/priceSchema");

// Controller function to handle POST request for Price Update
const createPriceUpdate = async (req, res) => {
  try {
    const { region, price } = req.body;

    // Check if a price update for the given region exists
    let existingPriceUpdate = await PriceUpdate.findOne({ region });

    if (existingPriceUpdate) {
      // Update the existing price
      existingPriceUpdate.price = price;
      await existingPriceUpdate.save();

      res.status(200).json({
        message: "Price updated successfully!",
        data: existingPriceUpdate,
      });
    } else {
      // Create a new Price Update instance
      const newPriceUpdate = new PriceUpdate({ region, price });

      // Save the new Price Update
      await newPriceUpdate.save();

      res.status(201).json({
        message: "Price created successfully!",
        data: newPriceUpdate,
      });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "Failed to update price. Please try again.",
    });
  }
};

// getPriceController.js

// Controller function to handle GET request for getting region and price
// priceGetController.js

// Controller function to handle GET request for all Price Updates
const getPrice = async (req, res) => {
  try {
    // Fetch all Price Updates from the database
    const allPriceUpdates = await PriceUpdate.find();

    res.status(200).json({
      message: "All price updates fetched successfully!",
      data: allPriceUpdates,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "Failed to fetch price updates. Please try again.",
    });
  }
};

module.exports = {
  createPriceUpdate,
  getPrice,
};
