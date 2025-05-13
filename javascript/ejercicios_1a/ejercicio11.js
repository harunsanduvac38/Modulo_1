const read = require("../leer.js");

let capitalinicial, interese, año, montofinal;

console.log("======Calculadora el Monto Final =====" + "\n");
capitalinicial = Number(read("¿Cuántos euros (€) quieres invertir? :")), console.log("€");
interese = Number(read("Ingrese una tasa de interes anual (en número decimal) : "));
año = Number(read("¿Cuántos años le gustaría invertir? : "));

montofinal = capitalinicial * interese * año;
montofinal = Math.round(montofinal)
console.log("\n" + "El interese está calculando ....." + "\n");
console.log("En " + año + " el monto final será " + montofinal + " €");

