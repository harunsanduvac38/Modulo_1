const read = require('../leer.js');

/*Imprimir por pantalla la suma de los n primeros números naturales, ingresando n por
teclado.*/

let cantidad, suma;
cantidad = Number(read("Ingrese cantidad : "));
suma = 0;

for(i = 1; i <= cantidad; i++){
    suma += i;
}
console.log(suma);