const read = require('../leer.js');

let numero1, numero2, operador, resultado;

numero1 = Number(read("Ingrese Numero1 : "));
numero2 = Number(read("Ingrese Numero2 : "));
operador = read("Ingrese el operador : ");

switch(operador){
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case '*':
        resultado = numero1 * numero2;
        break;
    case '/':
        resultado = numero1 / numero2;
        break;
}
console.log(`${numero1}${operador}${numero2} = ${resultado}`);