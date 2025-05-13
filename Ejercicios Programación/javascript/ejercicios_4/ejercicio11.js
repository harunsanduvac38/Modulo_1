const read = require("../leer.js");

/* Solicitar una fecha (día, mes, año) y validar si es una fecha correcta sin contemplar años
bisiestos, es decir, no se puede ingresar 29 2 xxxx. */ 

let numAno = Number(read("Ingrese un año : "));
let numMes = Number(read("Ingrese un mes : "));
let numDia = Number(read("Ingrese un dia : "));
let cantDias;
let fechaOk = true;

switch(numMes){
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
    case 2:
    case 6:
    case 9:
    case 11:
        cantDias = 30;
        break;     
    default:
        console.log("Valor Incorrecta");
        fechaOk = false;       
}

if (!(numDia >= 1 && numDia <= cantDias)){
    fechaOk = false;
}

console.log();
if(fechaOk){
    console.log(`La fecha " ${numDia}/${numMes}/${numAno}" correcta.`)
}else{
    console.log(`La fecha " ${numDia}/${numMes}/${numAno}" no es correcta.`)
}
console.log();
