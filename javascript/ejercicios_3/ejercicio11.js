const read = require('../leer.js');

//Escribir un programa que imprima las tablas del 1 al 9.


for(let i = 1; i <= 9; i++){
    console.log("\n Tabla del " + i);
    for(let y = 1; y <= 9; y++){
        console.log(`${i} x ${y} = ${i * y}`);  
        console.log('--');
    }
}
