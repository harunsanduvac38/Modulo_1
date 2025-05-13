const read = require("../leer.js");

let fahrenheit, celsius;

fahrenheit = Number(read("Ingrese un grado Fahrenheit para convertir a Celsius : "));  

celsius = (fahrenheit - 32) * 5 / 9

console.log("\n" + "-------------- El resultado es ---------------")
console.log(fahrenheit + "ºF igual a : " + celsius + "ºC")
