// const sampleController = require('../Controller/Sample-Controller');
const express = require('express');
const { getReview, postReview } = require('../Controller/Review-Controller');
const ReviewRouter = express.Router();

ReviewRouter.get('/',getReview);
ReviewRouter.post('/posting',postReview);
// Export the router
module.exports = ReviewRouter;