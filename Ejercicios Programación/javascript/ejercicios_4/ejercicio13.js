const read = require("../leer.js");

/* Solicite al usuario una fecha e indicar la cantidad de días transcurridos en ese año hasta esa
fecha. */

let numAno = Number(read("Ingrese Ano : "));
let numMes = Number(read("Ingrese Mes : "));
let numDia = Number(read("Ingrese Dia : "));
let cantDias;
let totalDias = 0

for(let i = 1; i < numMes; i++){
    switch(i){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            cantDias = 31;
            break;
        case 2:
            cantDias = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            cantDias = 30;
            break;
    }
    totalDias += cantDias;
}

totalDias += numDia; 
console.log(totalDias);