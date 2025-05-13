const read = require("../leer.js");

/*Escribir un programa que imprima todos los números pares incluidos en un rango. 
Los extremos del rango se le pidan al usuario. Los extremos deben incluirse.
Ejemplo:
Ingresando 1 y 8, debe imprimir: 2 4 6 8*/

let minimo, maximo;

minimo = Number(read("El rango minimo : "));
maximo = Number(read("El rango maximo : "));

if(minimo % 2 == 1){
    minimo += 1;
}
for(let i = minimo; i <= maximo; i+=2){
    if(i % 2 == 0){
        console.log(i);
    }
}
