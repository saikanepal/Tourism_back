const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const galleryImageSchema = new Schema({
    ImageUrl: { type: String },
    regionName: { type: String },
    description: { type: String }
},
    {
        timestamps: true
    });

const GalleryImage = mongoose.model('GalleryImage', galleryImageSchema);

module.exports = GalleryImage;
