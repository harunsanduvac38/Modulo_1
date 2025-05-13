//do - while
// Mientras el número menor de 1 o mayor de 7, pide otro numero correcto:

const read = require("../leer.js");

let nroDía;

do {
    nroDía = Number(read('Ingrese nro de día, 1 al 7 : '));

    if(nroDía < 1 || nroDía > 7){
        console.log("El valor no está correcto.");
    }

}while (nroDía < 1 || nroDía > 7);

console.log(nroDía);

