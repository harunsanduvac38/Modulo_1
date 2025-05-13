// Ingresando un valor entero, muestre por pantalla sus dígitos en orden inverso, por ejemplo:
// INGRESO: 3589, SALIDA: 9853.
const read = require('../leer.js');
const invierte = require('./invierte.js');

let valor = Number(read('Ingrese valor: '));

console.log(invierte(valor));

