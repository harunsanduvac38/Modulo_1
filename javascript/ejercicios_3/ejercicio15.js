const read = require('../leer.js');

/*Escriba un programa que pida un número entero mayor que cero y que escriba sus
divisores.*/

let numero;
do {
numero = Number(read('Un Numero : '));
}while(numero <= 0);

console.log("Los Divisores")
for(let i = 1; i <= numero; i++){
    if(numero % i == 0){
    console.log(i);
    }
}
console.log("\n");