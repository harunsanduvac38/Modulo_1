const read = require("../leer.js");


let day;

day = Number(read("Ingrese un número para ver qué día de semana : "));

if(day % 7 == 0){
    day = "Domingo";
}

if(day % 7 == 1){
    day = "Lunes";
}

if(day % 7 == 2){
    day = "Martes";
} 

if(day % 7 == 3){
    day = "Miércoles"
}

if(day % 7 == 4){
    day = "Jueves";
}

if(day % 7 == 5){
    day = "Viernes";
}

if(day % 7 == 6){
    day = "Sábado";
}

console.log("\n" + "El día de la semana es : " + day);