// Solicite al usuario un número que represente el mes e imprima su nombre y la cantidad de
// días que tiene (no contemplar años bisiestos).
const read = require('../leer.js');
const {nombreMes, cantDiasMes} = require('./fechas.js');

let mes = Number(read('Ingrese nro de mes: '));

console.log(`${nombreMes(mes)} tiene ${cantDiasMes(mes)} dias`);


