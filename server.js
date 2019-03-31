const express = require('express');
const app = express();
const hbs = require('hbs');

// requiero los helpers del origen del directorio
require('./hbs/helpers');

// de esta forma configuro el puerto donde esta mi server en heroku
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));
// pongo en esta carpeta de forma que sean de dominio publicp
//todo lo que vaya aqui va a poder ser buscado poniendo el nombre y la extencion del archivo

//importo las rutas
app.use(require('./routes'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
// LAs vistas que puedo renderizar deben estar en 'views'
app.set('view engine', 'hbs');


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});