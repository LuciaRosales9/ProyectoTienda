// Importa Mongoose
const mongoose = require('mongoose');

// Define el esquema para las fotos
const photoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    url: {
        type: String,
        required: true
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria'
    }
});

// Define el modelo de datos para las fotos
const Photo = mongoose.model('Photo', photoSchema);

// Exporta el modelo
module.exports = Photo;
