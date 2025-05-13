const read = require('../leer.js');

/* Escribir un programa que imprima por pantalla todas las fichas de dominó, de una por
línea y sin repetir.
0 : 0
0 : 1 */

for(let i = 0; i<=6; i++){
    console.log('\n');
    for(let y = 0; y<=i; y++){
        // if(i >= y){
        process.stdout.write(`${i}:${y} `);
        // }
    }
}
console.log('\n');