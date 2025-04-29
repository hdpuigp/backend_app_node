// Definiendo un objeto de tipo mongoose
const mongoose = require('mongoose');
// Definiendo la estructura del documento review
const ReviewSchema = mongoose.Schema(
    {
        Entidad: {
            type: String,
        },
        Clave_Ent: {
            type: mongoose.Schema.Types.Int,
        }
    }
)

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
