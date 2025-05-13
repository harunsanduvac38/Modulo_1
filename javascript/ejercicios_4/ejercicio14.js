const read = require("../leer.js");

/* Solicite al usuario una fecha e indicar los días que faltan hasta fin de año. (se supone que el
año no es bisiesto) */

let numAno = Number(read("Ingrese un ano : "));
let numMes = Number(read("Ingrese un mes : "));
let numDia = Number(read("Ingrese un dia : "));

let cantDias;
let faltaDias = 0;

for(let i = numMes; i <= 12; i++){
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
    if(i == numMes){
        faltaDias += (cantDias - numDia);
    }else{ 
        faltaDias += cantDias;
    }
}

console.log("Los dias que faltan desde " + numDia + "/" + numMes + "/" + numAno + " hasta fin de ano : " + faltaDias);