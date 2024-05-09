const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: { type: String },
    personalRating: { type: Number },
    // region: { type: Schema.Types.ObjectId, ref: 'Rating',index: true },
    description: { type: String }
});
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

