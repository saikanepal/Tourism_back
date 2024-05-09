const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    name: { type: String, unique: true,index: true },
    sum: { type: Number, default: 0 },
    ratingAmount: { type: Number, default: 0 }
});
const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
// module.exports= mongoose.model('Rating', ratingSchema);
