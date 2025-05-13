const read = require("../leer.js");

/*Dado un número entero n positivo, imprimir su factorial.
0! = 1 1! = 1 2! = 2x1 = 2 3! = 3x2x1 = 6 4! = 4x3x2x1 = 24 5! = 120*/

let numero, factorial;
factorial = 1
do {
    numero = Number(read("Un numero entero positivo: "));
    if(numero < 0){
        console.log("Valor incorrecto!");
    }
}while(numero < 0);

for(let i =1; i <= numero; i++){
    factorial *= i;
}

console.log(`${numero}! = ${factorial}`);