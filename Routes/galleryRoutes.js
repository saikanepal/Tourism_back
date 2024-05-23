// const sampleController = require('../Controller/Sample-Controller');
const express = require('express');
const { postGalleryVideo, getGalleryVideo, postGalleryImage, getGalleryImage } = require('../Controller/GalleryContoller');
const GalleryRouter = express.Router();

// VIDEOS
GalleryRouter.post('/postVideoDetails', postGalleryVideo);
GalleryRouter.get('/getVideoDetails', getGalleryVideo);

// IMAGES
GalleryRouter.post('/postImageDetails', postGalleryImage);
GalleryRouter.get('/getImageDetails', getGalleryImage);

module.exports = GalleryRouter;