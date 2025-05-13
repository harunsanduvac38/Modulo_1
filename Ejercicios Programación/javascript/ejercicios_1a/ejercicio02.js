const read = require('../leer.js');

let altura, ancho, perimetro, area;

altura = read("Ingrese un valor de altura : ");
ancho = read('Ingrese un valor de ancho : ');
perimetro = 2 * altura + 2 * ancho;
area = altura * ancho;
console.log("Perimetro de rectangulo es : " + perimetro);
console.log("Area de rectangulo es : " + area);