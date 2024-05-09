const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const abcSchema = new Schema({
    name: { type: String },

});

module.exports= mongoose.model('abc', abcSchema);