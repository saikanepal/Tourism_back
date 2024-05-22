const cloudinary = require("cloudinary").v2;
const Images = require("../models/imageSchema");

// Configure Cloudinary
// cloudinary.config({
//   cloud_name: "xx",
//   api_key: "xx",
//   api_secret: "xx",
// });

cloudinary.config({
  cloud_name: "dyitgqnlm",
  api_key: "122421484597921",
  api_secret: "HgQnTJExs5lXK8z8m6u5bJuIUb8",
});
// Upload and replace images
const uploadImage = async (req, res) => {
  const { uploadedImages } = req.body;

  try {
    // Fetch existing images from the database
    const existingImages = await Images.find({});
    const existingCount = existingImages.length;

    // Iterate over the uploadedImages to update or add images based on index
    for (let index = 0; index < uploadedImages.length; index++) {
      const image = uploadedImages[index];

      if (!image || !image.Picture || !image.Picture.id || !image.Picture.img) {
        // If the image at this index is empty or invalid, skip this index
        continue;
      }

      const data = {
        cid: image.Picture.id,
        img: image.Picture.img,
      };

      if (index < existingCount) {
        // Update existing image
        const existingImage = existingImages[index];

        // Delete the old image from Cloudinary
        await cloudinary.uploader.destroy(existingImage.cid);

        existingImage.cid = data.cid;
        existingImage.img = data.img;
        await existingImage.save();
      } else {
        // Add new image
        const newImage = new Images(data);
        await newImage.save();
      }
    }

    // If there are more than 3 images in the database, delete the extra images
    if (existingCount > 3) {
      const deleteCount = existingCount - 3;
      const imagesToDelete = existingImages.slice(3);
      await Images.deleteMany({
        _id: { $in: imagesToDelete.map((img) => img._id) },
      });

      // Delete the extra images from Cloudinary
      for (const img of imagesToDelete) {
        await cloudinary.uploader.destroy(img.cid);
      }
    }

    res.status(201).json({
      message: "Images updated successfully.",
    });
  } catch (error) {
    // Handle any errors that occur during the save or delete operation
    console.error("Error updating images:", error);
    res.status(500).json({ error });
  }
};

// Fetch all images
const getAllImages = async (req, res) => {
  try {
    // Fetch all images from the database
    const allImages = await Images.find();
    console.log("allImages", allImages);
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
