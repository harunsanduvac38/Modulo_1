const read = require('../leer.js');

//Siguiendo la misma metodología de carga, calcular la cantidad de valores positivos.

let numero, cantidad, positivo;
cantidad = Number(read('Introduzca un cantidad : '));
positivo = 0

for(let i = 1; i <= cantidad; i++){
    numero = Number(read("Ingrese un numero : "));
    if(numero > 0){
        positivo++;
    }
}
console.log(`Los valores positivos : ${positivo}`);