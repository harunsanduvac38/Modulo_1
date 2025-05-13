const read = require('../leer.js');

/* Ingresando un valor entero, muestre por pantalla sus dígitos en orden inverso, por ejemplo:
INGRESO: 3589, SALIDA: 9853.*/

let numero = Number(read("ingrese un numero : "));
let resultado = 0;

for (let i = 0; numero !== 0; i++){
    resultado = resultado * 10 + numero % 10;
    numero = Math.floor(numero / 10);
}
console.log('\n En Orden Inverso : ' + resultado);
