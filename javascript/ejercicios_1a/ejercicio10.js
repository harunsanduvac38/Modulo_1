const read = require("../leer.js");

let a, b, h;

console.log("\n" + "==== Programa de Calcular Hipotenusa =====" + "\n");
a = Number(read("Ingrese un cateto de un triángulo rectángulo :"));
b = Number(read("Ingrese otro cateto del : "));

hipotenusa = Math.sqrt(a**2 + b**2);

console.log("La hipotenusa de triángulo rectángulo es : " + "\n" + "              " + "---   " + hipotenusa + "   ---")

