// Definiendo un objeto de tipo mongoose
const mongoose = require('mongoose');
// Definiendo la estructura del documento review
const ReviewSchema = mongoose.Schema(
    {
        _id: {
            type: String,
        },
        Abril: {
            type: Int32,
            required: true
        },
        Agosto: {
            type: Int32,
            required: true
        },
        Año: {
            type: Int32,
        },
        Clave_Ent: {
            type: Int32,
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
