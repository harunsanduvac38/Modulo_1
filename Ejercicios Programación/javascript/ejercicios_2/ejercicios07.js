const read = require('../leer.js');

/*Realizar un programa que adivine el número (entre 0 y 100) que ha pensado el usuario. 
En cada paso, el programa propone un número y el usuario debe contestar, introduciendo su
contestación como dato, si ha acertado, o bien si el número que ha propuesto el
ordenador es mayor o es menor que el que tenía pensado. 
Por ejemplo, ingresando:
0 –> Acierto
1 –> El valor propuesto es mayor
-1 –> El valor propuesto es Menor*/

console.log("\n" + "El valor es cierto : 0," + "\n" + "el valor propuesto es mayor : 1" + "\n" + "El valor propuesto es menor : -1" + "\n");
let minimo, maximo;
minimo = 0;
maximo = 100;
let número;
do {
    número = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    
    console.log(número);

    respuesta = Number(read("¿Que es tu respuesta ? :  "));

    if(respuesta == 1){
        console.log("El valor propuesto es  mayor.");
        maximo = número;
    }
    if(respuesta == -1){
        console.log("El valor propueseto es menor.");
        minimo = número;
    }
} while (respuesta !== 0);

console.log("Sí, Acierto");



