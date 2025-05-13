const read = require('../leer.js');

/* Repetir el ejercicio anterior, pero ingresando un número entero de cualquier cantidad de
cifras. */

let numero = Number(read("ingrese un numero : "));
let divido;
for (let i = 1; divido !== 0; i++){
    console.log(`Sus digitos : ${numero % 10}`);
    divido = Math.floor(numero / 10);
    numero = divido;
}
