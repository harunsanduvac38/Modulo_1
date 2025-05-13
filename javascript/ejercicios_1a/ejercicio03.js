const read = require('../leer.js');

let radio, perimetro, area;

radio = read("Por favor un valor de radio : ");
perimetro = 2 * Math.PI * radio;
area = Math.PI * radio * radio 
console.log("\n");
console.log("Perimetro del circulo es : " + perimetro);
console.log("\n")
console.log("Area del circulo es : " + area);
console.log("\n")

