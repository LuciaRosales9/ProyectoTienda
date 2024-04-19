// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);
app.get('/', (req, res) => {
    res.send('¡Backend funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// server.js
const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://admin:admin@romeco.7migubc.mongodb.net/';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
    console.log('Conectado a MongoDB');
});