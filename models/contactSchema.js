const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: { type: String },
    email: { type: String },
    country: { type: String },
    contactNumber: { type: Number },

});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
