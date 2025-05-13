const read = require("../leer.js");

let num1, num2;
num1 = Number(read("Ingrese un numero : "));
num2 = Number(read("Ingrese otro :"));
if (num1 > num2){
    console.log("El numero " + num1 + " mayor que " + num2);
}else if(num1 == num2){
    console.log("Los numeros son iguales.")
}else{
    console.log("El numero " + num2 + " mayor que " + num1);
}

