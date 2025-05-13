const read = require("../leer.js");
const invierte = require("./func_invierte.js");

//Determine si un valor entero ingresado por teclado es un palíndromo (capicúa).


let num = Number(read("Ingrese un valor : "));

console.log(invierte(num));
if(num == invierte(num)){
    console.log(`${num} es palindromo`);
}else{
    console.log(`${num} no es palindromo`);
}