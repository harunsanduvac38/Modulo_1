const read = require('../leer.js');

/*Escribir un programa que pida al usuario un número entero positivo mayor que 2 y
muestre por pantalla si es un número primo o no. */

let numero;
let primo = Boolean(true);
do {
    numero = Number(read('Un numero entero mayor que 2 : '));
}while(numero < 2);

for(let i = 2; i < (numero / 2) && primo; i++){  
//for(let i = 2; i < numero && primo; i++){  
//for(let i = 2; i < Math.sqrt(numero) && primo; i++){  
    if(numero % i == 0){
        primo = false;
        console.log(`${numero} no es un primo`);
    }
}

if(primo){
    console.log(`${numero} es un primo`);
}
