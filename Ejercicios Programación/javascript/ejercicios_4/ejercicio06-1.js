const read = require("../leer.js");
const invierte = require("../teoria/ejercicios_4/invierte.js");

let num = read("Ingrese un numero : ");
let numInv = invierte(num);
console.log(numInv);