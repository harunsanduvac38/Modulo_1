const read = require('../leer.js');

//Siguiendo la misma metodología de carga, calcular 
// la cantidad de valores >= 0 y la cantidad menores que 0.

let numero, cantidad, positivo, negativo;
positivo = negativo = 0
cantidad = Number(read("ingrese un cantidad : "));

for(let i = 1; i <= cantidad; i++){
    numero = Number(read("ingrese un numero : "));
    if(numero >= 0)
        positivo++;
    if(numero < 0)
        negativo++;
}

console.log(`Los 0 o positivos : ${positivo} \nLos negativos : ${negativo}`);