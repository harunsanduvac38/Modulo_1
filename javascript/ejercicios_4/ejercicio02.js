const read = require('../leer.js');

/* Escriba un programa que lea el lado de un cuadrado por teclado y a continuación lo
muestre por pantalla en forma de asteriscos. Por ejemplo, ingresado el valor 4 la salida
será:
****
****
****
**** */

console.log("Bienvenido!");
let numero = Number(read('Un Numero : '));

for(let i = 1; i <= numero; i++){
    process.stdout.write("\n"); 
    for(let y =1; y <= numero; y++){
        process.stdout.write("*");
    }
}
console.log(`\n Gracias!`);

