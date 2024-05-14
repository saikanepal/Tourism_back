const Booking = require("../models/bookingSchema");

const postBookingDetails = async (req, res) => {
    try {
        const { name, email, country, contactNumber, arrivalDate, departureDate, requirements } = req.body;
        const newBooking = new Booking({ name, email, country, contactNumber, arrivalDate, departureDate, requirements })
        await newBooking.save()

        res.status(200).json(newBooking);
    } catch (error) {
        console.error(err);
        res.status(500).json({ message: "Error in Booking Form", error: err.message });
    }
};

const getBookingDetails = async (req, res) => {
    try {
        const booking = await Booking.find()
        return res.status(201).json({ booking })
    } catch (err) {
        console.log(err.message)
    }
};

const getParticularBooking = async (req, res) => {
    // fetches particular booking on the basis of date 
    try {
        const { arrivalDate } = req.body;
        const particularBooking = await Booking.find({ arrivalDate })

        if (particularBooking.length === 0)
            return res.status(200).json({ particularBooking, message: "No any booking on that date" })

        return res.status(201).json({ particularBooking })
    } catch (err) {
        console.log(err.message)
    }
};

module.exports = {
    postBookingDetails, getBookingDetails, getParticularBooking
};