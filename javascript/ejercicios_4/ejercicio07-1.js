const read = require("../leer.js");

//Determine si un valor entero ingresado por teclado es un palíndromo (capicúa).

let num = Number(read("Ingrese un numero : "));
let tmp = num;
let cifras, der, izq;
let capicua = true
cifras = Math.trunc(Math.log10(num));

while(cifras > 0 && capicua){
    der = tmp % 10;
    izq = Math.trunc(tmp / Math.pow(10,cifras));
    tmp -= izq * Math.pow(10,cifras);
    tmp = Math.trunc(tmp / 10);
    cifras -= 2;

    console.log(der);
    console.log(izq);

    if(izq !== der){
        capicua = false;
    }
}

if(capicua){
    console.log("El numero es capicua!");
}else{
    console.log("El numero no es capicua!!");
}

