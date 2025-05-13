const read = require("../leer.js");

let hora, minuto, segundo, totalsegundo;


hora = Number(read("Ingrese una cantidad de hora: "));
minuto = Number(read("Ingrese una cantidad de minuto : "));
segundo = Number(read("Ingrese una cantidad de segundo : "));

totalsegundo = (hora * 60 * 60) + (minuto * 60) + segundo;

console.log("Total segundo es : " + totalsegundo);

