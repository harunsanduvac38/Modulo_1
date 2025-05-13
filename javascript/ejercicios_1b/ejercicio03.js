const read = require("../leer.js");

let tiempo1, tiempo2, hora1, hora2, minuto1, minuto2, segundo1, segundo2;
let tiempofinal, horafinal, minutofinal, segundofinal;

hora1 = Number(read("Ingrese primera hora : "));
minuto1 = Number(read("Ingrese primer minuto : "));
segundo1 = Number(read("Ingrese primer segundo : "));
hora2 = Number(read("Ingrese segunda hora : "));
minuto2 = Number(read("Ingrese segundo minuto : "));
segundo2 = Number(read("Ingrese segundo segundo : "));
console.log("\n");

console.log("Tiempo1 : " + hora1 + ":" + minuto1 + ":" + segundo1);
console.log("Tiempo2 : " + hora2 + ":" + minuto2 + ":" + segundo2);

console.log("Ahora sumamos los dos y resultato es : " + "\n");

horafinal = hora1 + hora2;
minutofinal = minuto1 + minuto2;
segundofinal = segundo1 + segundo2;



if(segundofinal >= 60){
    segundofinal = segundofinal % 60;
    minutofinal = minutofinal + Math.floor((segundo1 + segundo2) / 60);
    if(minutofinal >= 60) {
        horafinal = horafinal + Math.floor(minutofinal / 60);
        minutofinal = minutofinal % 60;
    }else
        horafinal = horafinal;
        minutofinal = minutofinal;
}else 
    if(minutofinal >= 60){
    horafinal = horafinal + Math.floor(minutofinal / 60);
    minutofinal = minutofinal % 60;
    }

tiempofinal = horafinal + ":" + minutofinal + ":" + segundofinal;

console.log(tiempofinal);
