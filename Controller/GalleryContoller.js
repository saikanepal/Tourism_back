const GalleryImage = require("../models/Gallery/galleryImageModel");
const GalleryVideo = require("../models/Gallery/galleryVideoModel");

// VIDEO SECTION 
const postGalleryVideo = async (req, res) => {
    try {
        const { videoUrl, title, description } = req.body;
        const newGalleryVideo = new GalleryVideo({ videoUrl, title, description })
        await newGalleryVideo.save()

        res.status(200).json(newGalleryVideo);
    } catch (error) {
        console.error(err);
        res.status(500).json({ message: "Error in Booking Form", error: err.message });
    }
};

const getGalleryVideo = async (req, res) => {
    try {
        const galleryVideoDetails = await GalleryVideo.find().sort({ createdAt: -1 })

        if (galleryVideoDetails.length === 0)
            return res.status(200).json({ galleryVideoDetails, message: "No any videos to display" })

        return res.status(201).json({ galleryVideoDetails })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error in Getting particular booking details", error: err.message });
    }
};

// IMAGE SECTION
const postGalleryImage = async (req, res) => {
    try {
        const { imageUrl, regionName, description } = req.body;
        const newGalleryImage = new GalleryImage({ imageUrl, regionName, description })
        await newGalleryImage.save()

        res.status(200).json(newGalleryImage);
    } catch (error) {
        console.error(err);
        res.status(500).json({ message: "Error in Booking Form", error: err.message });
    }
};

const getGalleryImage = async (req, res) => {
    try {
        const galleryImageDetails = await GalleryImage.find().sort({ createdAt: -1 })

        if (galleryImageDetails.length === 0)
            return res.status(200).json({ galleryImageDetails, message: "No any Images to display" })

        return res.status(201).json({ galleryImageDetails })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error in Getting particular booking details", error: err.message });
    }
};

module.exports = {
    postGalleryVideo, getGalleryVideo, postGalleryImage, getGalleryImage
};