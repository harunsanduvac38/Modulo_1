const read = require('../leer.js');

//De una lista de n números ingresados por teclado, imprimir el mayor y el menor valor.

let numero, cantidad, mayor, menor;

cantidad = Number(read("Introduzca una cantidad: "));


for(let i = 1; i <= cantidad; i++){
    numero = Number(read("Escribe un numero : "));
    
    if(i == 1){
        mayor = numero;
        menor = numero
    }
    if(numero > mayor){
        mayor = numero;
    }
    if(numero < menor){
        menor = numero;
    }
}

console.log(`El mayor = ${mayor} \nEl menor = ${menor}`);