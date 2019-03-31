const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Leandro'
    });
    // de esta manera cualquier peticion GET / va a renderizar el home

});

router.get('/about', (req, res) => {

    res.render('about');

});

router.get('*', (req, res) => {

    res.end('Archivo no encontrado');

});

module.exports = router;