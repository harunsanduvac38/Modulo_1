const read = require("../leer.js");

let numero, par, impar, error;
par = "El número es un par.";
impar = "El número es un impar.";
error = "Este número no vale, intenta ingresar un número entero positivo";

let entradaok = true

do {
    entradaok = true
    numero = Number(read("Para saber si es par o impar, ingrese un número : "));

    if (numero < 0){
        console.log("Error, el número es menor que cero");
        entradaok = false;
    }
} while (!entradaok);


if((numero % 2) == 0){
  result = par;
}else{
   result = impar;
    }

console.log (result);