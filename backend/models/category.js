const mongoose = require('mongoose');
// Define el esquema para las categorías
const categoriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    }
});

// Define el modelo de datos para las categorías
const Categoria = mongoose.model('Categoria', categoriaSchema);

// Exporta el modelo
module.exports = Categoria;
