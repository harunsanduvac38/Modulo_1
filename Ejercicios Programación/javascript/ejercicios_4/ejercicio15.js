const read = require("../leer.js");

/* Solicite al usuario dos fechas (día1, mes1, año1, día2, mes2, año2), indicar el tiempo
transcurrido en días entre ambas, sin tener en cuenta años bisiestos. */

let numDia1 = Number(read("Ingrese primer Dia : "));
let numMes1 = Number(read("Ingrese primer Mes : "));
let numAno1 = Number(read("Ingrese primer Ano : "));
let numDia2 = Number(read("Ingrese segundo Dia : "));
let numMes2 = Number(read("Ingrese segundo Mes : "));
let numAno2 = Number(read("Ingrese segundo Ano : "));

let mayorMes, menorMes, diasMayor, cantDias, totalDias, diasMenor;
totalDias = 0;
if(numMes1 < numMes2){
    mayorMes = numMes2;
    menorMes = numMes1;
    diasMenor = numDia1;
    diasMayor = numDia2;
}else{
    mayorMes = numMes1;
    menorMes = numMes2;
    diasMenor = numDia2;
    diasMayor = numDia1;
}


for (let i = menorMes ; i < mayorMes; i++){
    switch (i){
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
    if(i == menorMes){
        totalDias += (cantDias - diasMenor);
    }else{
        totalDias += cantDias;
    }
}

totalDias += val_abs(numAno1, numAno2) * 365;

totalDias += diasMayor;
console.log(totalDias);


function val_abs(valor1, valor2){
    if(valor1 - valor2 < 0){
        return (valor1 - valor2) * -1;
    }else{
        return valor1 - valor2;
    }
}