const read = require('../leer.js');

/*Escribir un programa que pida al usuario un número entero positivo y muestre por
pantalla la cuenta atrás desde ese número hasta cero separados por comas. */

let numero;
do{
    numero = Number(read('Un Numero : '));
}while(numero <= 0);

for(let i = numero; i >= 0; i--){
    if(i !== 0){
        process.stdout.write(`${i}, `);
    }else{
        process.stdout.write(`${i} `);
    }
}

console.log('\n');