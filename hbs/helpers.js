const hbs = require('hbs');



// Helpers
hbs.registerHelper('getAnio', () => new Date().getFullYear());

hbs.registerHelper('capitalizar', (txt) => {
    let palabras = txt.split(' ');
    palabras.forEach((palabra, idx) => {

        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

    });

    return palabras.join(' ');

});