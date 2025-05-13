const read = require('../leer.js');

/*De una lista de n números ingresados por teclado, imprimir el mayor.*/

let cantidad, numero, mayor;
mayor = 0
cantidad = Number(read("Ingrese un cantidad : "));

for(let i = 1; i <= cantidad; i++){
    numero = Number(read("Ingrese un numero : "));
    if(mayor < numero){
        mayor = numero;
    }
}

console.log(`El mayor : ${mayor}`);

