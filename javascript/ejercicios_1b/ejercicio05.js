const read = require("../leer.js");

let año, bisiesto, nobisiesto;
bisiesto = "El año es bisiesto";
nobisiesto = "EL año no es bisiesto";

año = Number(read("Escribe un año : "));

if((año % 4) == 0 && (año % 100) !== 0 || (año % 400) == 0){
    año = bisiesto;
}else{
    año = nobisiesto;
}




console.log(año);