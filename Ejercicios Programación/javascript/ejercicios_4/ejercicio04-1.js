
const read = require("../leer.js");

/* Ingresando un número entero por teclado de 4 cifras, mostrar sus dígitos uno por línea. */

let numero = Number(read("Ingrese un numero : "));

for (i = 1; i <= 4 ; i++){
    console.log("Sus Digitos : " + (numero % 10));
    divido = Math.floor(numero / 10);
    numero = divido;
}