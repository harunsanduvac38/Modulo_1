const read = require("../leer.js");

/* Solicite al usuario un número que represente el mes e imprima su nombre y la cantidad de
días que tiene (no contemplar años bisiestos). */

let num = Number(read("Un Numero : "));
let nombreMes, diaMes;
let mes1 = 31;
let mes2 = 30;
let mes3 = 28;

switch(num){
    case 1:
        nombreMes = "Enero";
        diaMes = mes1;
        break;
    case 2:
        nombreMes = "Febrero";
        diaMes = mes3;
        break;
    case 3:
        nombreMes = "Marzo";
        diaMes = mes1;
        break;
    case 4:
        nombreMes = "Abril";
        diaMes = mes2;
        break;   
    case 5:
        nombreMes = "Mayo";
        diaMes = mes1;
        break;
    case 6:
        nombreMes = "Junio";
        diaMes = mes2;
        break;       
    case 7:
        nombreMes = "Julio";
        diaMes = mes1;
        break;
    case 8:
        nombreMes = "Agosto";
        diaMes = mes1;
        break;
    case 9:
        nombreMes = "Septiembre";
        diaMes = mes2;
        break;
    case 10:
        nombreMes = "Octubre";
        diaMes = mes1;
        break;
    case 11:
        nombreMes = "Noviembre";
        diaMes = mes2;
        break;
    case 12:
        nombreMes = "Diciembre";
        diaMes = mes1;
        break;
}

console.log("El mes es " + nombreMes + " y " + diaMes +  " dias tiene.");