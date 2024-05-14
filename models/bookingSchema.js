const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    name: { type: String },
    email: { type: String },
    country: { type: String },
    contactNumber: { type: Number },
    arrivalDate: { type: String, },
    departureDate: { type: String },
    requirements: { type: String }
},
    {
        timestamps: true
    });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
