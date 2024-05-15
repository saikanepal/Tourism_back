// const sampleController = require('../Controller/Sample-Controller');
const express = require('express');
const { postBookingDetails, getBookingDetails, getParticularBooking } = require('../Controller/Booking-Controller');
const BookingRouter = express.Router();

BookingRouter.post('/postBookingDetail', postBookingDetails);
BookingRouter.get('/getBookingDetail', getBookingDetails);
BookingRouter.get('/getParticularBooking', getParticularBooking);

module.exports = BookingRouter;