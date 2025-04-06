// Definiendo un objeto de tipo mongoose
const mongoose = require('mongoose');
// Definiendo la estructura del documento review
const ReviewSchema = mongoose.Schema(
    {
        _id: {
            type: String,
        },
        listing_url: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        sumary: {
            type: String,
        },
        space: {
            type: String,
        },
        description: {
            type: String,
        },
        neighborhood_overview: {
            type: String,
        },
        notes: {
            type: String,
        },
        transit: {
            type: String,
        },
        access: {
            type: String,
        },
        interaction: {
            type: String,
        },
    }
)

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
