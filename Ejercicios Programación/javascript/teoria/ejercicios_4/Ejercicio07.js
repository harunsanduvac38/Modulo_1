// Determine si un valor entero ingresado por teclado es un palíndromo (capicúa).
const read = require('../leer.js');
const invierte = require('./invierte.js');

let num = Number(read('Ingrese valor: '));

if (num == invierte(num))
    console.log(`${num} es un palindromo`);
else
    console.log(`${num} NO es un palindromo`);


