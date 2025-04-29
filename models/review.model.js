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
    required: true
  },
  Municipio: {
    type: String,
    required: true
  },
  Delito: {
    type: String,
    required: true
  },
  Subtipo: {
    type: String,
    required: true
  },
  Modalidad: {
    type: String,
    required: true
  },
  Víctimas: {
    type: Number,
    required: true
  }
    }
)

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
