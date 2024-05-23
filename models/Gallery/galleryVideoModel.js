const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const galleryVideoSchema = new Schema({
    videoUrl: { type: String },
    title: { type: String },
    description: { type: String }
},
    {
        timestamps: true
    });

const GalleryVideo = mongoose.model('GalleryVideo', galleryVideoSchema);

module.exports = GalleryVideo;
