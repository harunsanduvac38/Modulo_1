// Escriba un programa que imprima los siguientes patrones por separado, uno debajo del
// siguiente, una vez que el usuario ingresó el tamaño, por ejemplo 5. Utilice ciclos for para
// generar los patrones. Todos los asteriscos deberán ser impresos por un solo enunciado print
// de la forma print(‘*’). Sugerencia: los dos últimos patrones requieren que cada línea
// comience con un número correcto de espacios en blanco: print(‘ ’).
// *      *****  *****       *
// **     ****    ****      **
// ***    ***      ***     ***
// ****   **        **    ****
// *****  *          *   *****
const read = require('../leer.js');

let lado = Number(read('Ingrese lado: '));

t1(lado);
console.log();
t2(lado);
console.log();
t3(lado);
console.log();
t4(lado);


function t1(lado){
    for (let i = 1; i <= lado; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write('*');
        }
        console.log();
    }
}
function t2(lado){
    for (let i = 1; i <= lado; i++) {
        for (let j = 1; j <= lado - i + 1; j++) {
            process.stdout.write('*');
        }
        console.log();
    }
}
function t3(lado){
    for (let i = 1; i <= lado; i++) {
        for (let j = 1; j <= lado; j++) {
            if (j < i)
                process.stdout.write(' ');
            else
                process.stdout.write('*');
        }
        console.log();
    }
}
function t4(lado){
    for (let i = 1; i <= lado; i++) {
        for (let j = 1; j <= lado; j++) {
            if (j <= lado - i)
                process.stdout.write(' ');
            else
                process.stdout.write('*');
        }
        console.log();
    }
}
