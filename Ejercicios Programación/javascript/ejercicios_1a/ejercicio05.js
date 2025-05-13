const read = require('../leer.js');

let volumen, radio;

radio = Number(read("ingrese in valor de radio : "));

volumen = 4 / 3 * Math.PI * Math.pow(radio,3);

console.log(`El volumen de la esfera es : ${volumen}`);

