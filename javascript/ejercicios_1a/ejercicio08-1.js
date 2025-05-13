const read = require("../leer.js");

let num1, num2, num3;
let mayor, menor;

console.log("Ingrese tres números para saber cuál es mayor y menor :)")

num1 = Number(read("Ingrese un numero : "));
num2 = Number(read("Ingrese otro : "));
num3 = Number(read("Ingrese el ultimo : "));

if (num1 > num2 && num1 > num3){
    mayor = num1
    if(num2 > num3){
        menor = num3
    }else{
            menor = num2
    }
}
    
if(num3 > num1 && num3 > num2){
    mayor = num3
    if(num2 > num1){
        menor = num1
    }else{
        menor = num2
    }
}
 if(num2 > num1 && num2 > num3) {
    mayor = num2
    if(num1 > num3){
        menor = num3
    }else{
        menor = num1
    }
 }


console.log("\n" + "································")
console.log("El mayor numero es :" + mayor + "\n")

console.log("El menor numero es : " + menor)
 