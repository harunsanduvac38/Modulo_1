// Solicite al usuario un número que represente el mes e imprima su nombre.
const read = require('../leer.js');
const {nombreMes} = require('./fechas.js');

let mes = Number(read('Ingrese nro de mes: '));

console.log(nombreMes(mes));


