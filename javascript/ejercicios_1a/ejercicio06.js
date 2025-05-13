const read = require('../leer.js');

let num1, num2, suma, diferencia, producto, division;

num1 = Number(read("Escribe un numero real : "));
num2 = Number(read("Escribe otro numero : "));
suma = num1 + num2;
diferencia = num1 - num2;
producto = num1 * num2;
division = num1 / num2
console.log("Los resultados de suma, diferencia, producto y division");
console.log("\n");
console.log("Suma : " + suma + "\n" + "Diferencia : " + diferencia);
console.log("Producto : " + producto + "\n" + "Division : " + division);

