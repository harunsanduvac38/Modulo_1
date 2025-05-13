const read = require("../leer.js");

let x1, x2, y1, y2, d;

x1 = Number(read("Escribe un punto x1 = "));
y1 = Number(read("Escribe un punto y1 = "));
x2 = Number(read("Escribe un punto x2 = "));
y2 = Number(read("Escribe un punto y2 = "));

d = Math.pow((x2 - x1)**2 + (y2 - y1)**2, 1 / 2);

console.log("La distancia entre dos puntos es : " + d);

