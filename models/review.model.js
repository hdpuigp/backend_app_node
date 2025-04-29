// Definiendo un objeto de tipo mongoose
const mongoose = require('mongoose');
// Definiendo la estructura del documento review
const ReviewSchema = mongoose.Schema(
    {
        _id: {
            type: String,
        },
        Año: {
    type: Number,
  },
  Municipio: {
    type: String,
  },
  Delito: {
    type: String,
  },
  Subtipo: {
    type: String,
  },
  Modalidad: {
    type: String,
  },
  Víctimas: {
    type: Number,
  }
    }
)

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
