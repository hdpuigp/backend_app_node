// Definiendo un objeto de tipo mongoose
const mongoose = require('mongoose');
// Definiendo la estructura del documento review
const ReviewSchema = mongoose.Schema(
    {
        _id: {
            type: ObjectId,
        },
        Abril: {
            type: String,
            required: true
        },
        Agosto: {
            type: String,
            required: true
        },
        Año: {
            type: String,
        },
        Clave_Ent: {
            type: String,
        },
        description: {
            type: String,
        },
        Municipio: {
            type: String,
        },
        Diciembre: {
            type: String,
        },
        Enero: {
            type: String,
        },
        Entidad: {
            type: String,
        },
        Febrero: {
            type: String,
        },
        Modalidad: {
            type: String,
        },
        Municipio: {
            type: String,
        },
        Noviembre: {
            type: String,
        },
        Octubre: {
            type: String,
        },
        Septiembre: {
            type: String,
        },
    }
)

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
