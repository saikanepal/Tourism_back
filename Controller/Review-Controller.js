const { default: abcSchema } = require("../models/abcSchema.js");
const { default: Review } = require("../models/reviewSchema.js");
const { default: Rating } = require("../models/ratingSchema.js");
const getReview = async (req, res) => {
    res.json("hllo")
};

const postReview =async (req,res)=>{
    try {
        // Extract name and personalRating from req.body
        const { name, personalRating, description } = req.body;

        // Create a new review
        const newReview = await Review.create({ name, personalRating, description });

        // Find or create the related rating
        let rating = await Rating.findOne({ name });

        if (!rating) {
            rating = await Rating.create({ name });
        }

        // Update the rating sum and rating amount
        rating.sum += personalRating;
        rating.ratingAmount += 1;

        // Save the updated rating
        await rating.save();

        // Return the newly created review
        res.status(201).json(newReview);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error in posting review" });
    }
}

const getParticularReview=async(req,res)=>{
    try{
        const {region}=req.body;
    }catch(err){
        
    }
}

module.exports = {
    getReview,
    postReview,
};