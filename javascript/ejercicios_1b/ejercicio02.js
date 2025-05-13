const read = require("../leer.js");

let hora, horafinal, minuto, minutofinal, segundofinal, segundo;

segundo = Number(read("Escribe una cantidad de segundo : "));

hora = segundo / 3600;
horafinal = Math.floor(hora);

minuto = (segundo % 3600) / 60;
minutofinal = Math.floor(minuto);

segundofinal = segundo % 60

console.log(segundo + " segundo igual a " + horafinal + " hora " + minutofinal + " minuto y " + segundofinal + " segundo");

