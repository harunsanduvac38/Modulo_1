const read = require("../leer.js");

//Determine si un valor entero ingresado por teclado es un palíndromo (capicúa).

let numero1 = numero2 = Number(read("Ingrese Un Numero : "));
let resultado = 0;
let capicua = true;


for(let i = 1; numero2 !== 0 && capicua; i++){
    resultado += numero2 % 10;
    numero2 = Math.floor(numero2 / 10);
    if(numero2 != 0){
        resultado *= 10;
    }
    
}

if(numero1 != resultado){
    capicua = false;
}

if(capicua){
    console.log("\n" + numero1 + "  es un Palindromo")
}else{
    console.log("\n" + numero1 +  "  no es un Palindromo");
}
