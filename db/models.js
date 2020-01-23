const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const db = require('../db/index.js');

const mainGallerySchema = new Schema({
    id: Number,
    description: String,
    imageURL: String,
    tags: [String]
});

const MainGallery = mongoose.model('MainGallery', mainGallerySchema);

MainGallery.create({
    id: 1,
    description: 'Front of House Overlooking LA',
    imageURL: 'C:\Users\Miguel\Documents\CohortHRLA-34\main-gallery-service\airbnbpic1.jpg',
    tags: ['home', 'pool', 'hill', 'view']
});

module.exports = MainGallery;