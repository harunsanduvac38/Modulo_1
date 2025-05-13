const read = require("../leer.js");

let base, altura;

base = read("Ingrese un valor de base : ");
altura = read("Ingrese un valor de altura : ");
area = base * altura * 2
console.log("Aqui tienes la area de triangulo : ");
console.log("\n");
console.log("Area del triangulo : " + area);
console.log(`Area del triangulo : ${area}`);
console.log("Muchas gracias por elegirnos");

