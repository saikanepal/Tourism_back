const Review = require('../models/reviewSchema.js')
const  Rating  = require("../models/ratingSchema.js");

const getReview = async (req, res) => {
    res.json("hello");
};

const postReview = async (req, res) => {
    try {
        // Extract name, personalRating, and description from req.body
        const { name, personalRating, description, region } = req.body;

        // Create a new review instance
        const newReview = new Review({ name, personalRating, description });

        // Save the new review
        await newReview.save();

        // Find or create the related rating
        let rating = await Rating.findOne({ region });

        if (!rating) {
            rating = new Rating({ region });
        }

        // Update the rating sum and rating amount
        rating.sum += personalRating;
        rating.ratingAmount += 1;

        // Save the updated rating
        await rating.save();

        // Update the review with the reference to the rating
        newReview.rating = rating._id;
        await newReview.save();

        // Return the newly created review
        res.status(201).json(newReview);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error in posting review", error: err.message });
    }
};
const getParticularReview = async (req, res) => {
    try {
        const { region } = req.body;
        // Handle getting particular review based on region
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error in getting particular review" });
    }
};

module.exports = {
    getReview,
    postReview,
    getParticularReview
};
