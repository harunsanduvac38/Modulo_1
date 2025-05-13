const read = require("../leer.js");

let numDía = Number(read("Ingrese número de día : "));

let día = numDía % 7;

let nombreDía;

switch(día) {
    case 0:
        nombreDía = "Domingo";
        break;
    case 1:
        nombreDía = "Lunes";
        break;
    case 2:
        nombreDía = "Martes";
        break;
    case 3:
        nombreDía = "Miércoles";
        break;                           
    case 4:
        nombreDía = "Jueves";
        break;
    case 5:
        nombreDía = "Viernes";
        break;
    case 6:
        nombreDía = "Sábado";
    case 7:
    case 8:
    case 9:
        console.log("Vale mucho");
        break;
    default:
        console.log(`El valor incorrecto`);
}

console.log(`El día ${numDía} será  ${nombreDía}`);