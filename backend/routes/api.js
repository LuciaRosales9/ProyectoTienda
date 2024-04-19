// Importa Express y el modelo de datos de fotos y categorías
const express = require('express');
const router = express.Router();
const Photo = require('../models/photo');
const Category = require('../models/category');

// Define las rutas para las fotos
router.get('/photos', async (req, res) => {
    try {
        const photos = await Photo.find();
        res.json(photos);
    } catch (error) {
        console.error('Error al obtener las fotos:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.post('/photos', async (req, res) => {
    const { titulo, descripcion, url, categoria } = req.body;
    try {
        const nuevaFoto = new Photo({ titulo, descripcion, url, categoria });
        await nuevaFoto.save();
        res.status(201).json(nuevaFoto);
    } catch (error) {
        console.error('Error al crear la foto:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Define las rutas para las categorías
router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        console.error('Error al obtener las categorías:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.post('/categories', async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        const nuevaCategoria = new Category({ nombre, descripcion });
        await nuevaCategoria.save();
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        console.error('Error al crear la categoría:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Exporta las rutas
module.exports = router;
