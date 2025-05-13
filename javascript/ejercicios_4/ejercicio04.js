const read = require('../leer.js');

/* Ingresando un número entero por teclado de 4 cifras, mostrar sus dígitos uno por línea. */

let numero = Number(read("Un Numero de 4 Cifras : "));

let cien, diez, uno,

mil = Math.floor(numero / 1000);
cien = Math.floor((numero % 1000) / 100);
diez = Math.floor(((numero % 1000) % 100) / 10);
uno = (numero % 1000 % 100 % 10);

console.log(`${numero} = \n`);
console.log(`${mil} x 1000`);
console.log(`${cien} x 100`);
console.log(`${diez} x 10`);
console.log(`${uno} x 1`);


