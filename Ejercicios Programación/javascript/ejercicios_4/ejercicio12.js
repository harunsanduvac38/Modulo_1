const read = require("../leer.js");

/* Solicite al usuario una fecha e indicar los días que faltan hasta fin de mes. */

let numAno = Number(read('Ingrese un Ano : '));
let numMes = Number(read("Ingrese un Mes : "));
let numDia = Number(read("Ingrese un Dia : "));
let diaFalta, cantDias;
let totalDias = 0;

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
            diaFalta = 31 - numDia;
            break;
        case 2:
            cantDias = 28;
            diaFalta = 28 - numDia;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            cantDias = 30;
            diaFalta = 30 - numDia;
            break;
    }
    if(i == numMes){
        totalDias += diaFalta;
    }else{
        totalDias += cantDias;
    }
}

if(1<=numDia && numDia <= cantDias && 1<=numMes && 12 >= numMes){
    console.log("Los dias que faltan hasta fin de mes : " + totalDias);
    console.log();
}else{
    console.log("La fecha no esta correcta!");
}