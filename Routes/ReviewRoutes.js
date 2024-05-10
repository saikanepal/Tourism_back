// const sampleController = require('../Controller/Sample-Controller');
const express = require('express');
const { getSomeReview, postReview, getParticularReview } = require('../Controller/Review-Controller');
const ReviewRouter = express.Router();

ReviewRouter.get('/generalReview',getSomeReview);
ReviewRouter.post('/posting',postReview);
ReviewRouter.post('/getReview/:region',getParticularReview)
// Export the router
module.exports = ReviewRouter;