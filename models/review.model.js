// Definiendo un objeto de tipo mongoose
const mongoose = require('mongoose');
// Definiendo la estructura del documento review
const ReviewSchema = mongoose.Schema(
    {
        Entidad: {
            type: String,
        },
        Año: {
            type: String,
        },
        Municipio: {
            type: String,
        },
        Delito: {
            type: String,
        },
        Subtipo: {
            type: String,
        }
        
    }
)

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
