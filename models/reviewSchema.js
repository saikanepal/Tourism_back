const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Rating = require('./ratingSchema');
const reviewSchema = new Schema({
    name: { type: String },
    personalRating: { type: Number },
    rating: { type: Schema.Types.ObjectId, ref: 'Rating', index: true },
    description: { type: String }
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;