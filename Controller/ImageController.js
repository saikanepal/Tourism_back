// const Images = require("../models/imageSchema");

const uploadImage = async (req, res) => {
  const { uploadedImages } = req.body;
  console.log(uploadedImages[0].Picture);
  console.log(req.body);
  try {
    res.status(201).json({
      message: "Description saved and replaced successfully.",
    });
  } catch (error) {
    // Handle any errors that occur during the save or delete operation
    console.error("Error saving description:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const getAllImages = async (req, res) => {
  try {
    // Fetch all images from the database
    const allImages = await Images.find();

    // Send a response with the fetched images
    res.status(200).json({ images: allImages });
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error("Error fetching images:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
module.exports = {
  uploadImage,
  getAllImages,
};
