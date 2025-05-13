const read = require("../leer.js");

let capitalinicial, tasadeintereses, capitalizacion, tiempo, capitalfinal, tasacapitalizacion, capitalizaciontiempo;

console.log("Calculadora de Rendimiento de Intereses");

capitalinicial = Number(read("¿Cuántos euros(€) le gustaría invertir? :"));
tasadeintereses = Number(read("Ingrese una tasa de interés (en número decimal): "));
capitalizacion = Number(read("Ingrese la cantidad de capitalizaciones anuales : "));
tiempo = Number(read("¿Cuántos años? : "));

tasacapitalizacion = 1 + (tasadeintereses / capitalizacion);
capitalizaciontiempo = capitalizacion * tiempo;

capitalfinal = capitalinicial * Math.pow(tasacapitalizacion, capitalizaciontiempo);
capitalfinal = Math.floor(capitalfinal)
console.log("\n" + "Al final de " + tiempo + " año " + "capital final será : " + "\n" + "===  " + capitalfinal + "   ===");