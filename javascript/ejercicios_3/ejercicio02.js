const read = require('../leer.js');


/*Imprimir la suma de n números ingresados por teclado. La cantidad de números (n) 
se solicita al usuario al principio y se ingresa por teclado.*/


let cantidad, suma;
cantidad = Number(read("Ingrese cantidad : "));
suma = 0;

for(i = 1; i <= cantidad; i++){
    let numero = Number(read("Ingrese un numero : "));
    suma += numero;
}
console.log(suma);
