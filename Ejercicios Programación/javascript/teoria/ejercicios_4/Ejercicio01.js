// Calculadora de 4 operaciones. El usuario ingresa dos números y un carácter (+, -, *, / ) y el
// programa debe mostrar la operación y su resultado.
// Por ejemplo:
// Ingrese valor: 12.5
// Ingrese valor: 2
// Ingrese operación: -
// 12.5 – 2 = 10.5

const read = require('../leer.js');
let num1, num2, op;

num1 = Number(read('Ingrese valor: '));
num2 = Number(read('Ingrese valor: '));
op = read('Ingrese operador(+, -, *, /): ');
let resultado = calcula(num1, num2, op);

console.log(`${num1} ${op} ${num2} = ${resultado}`);

function calcula(val1, val2, op) {
    let resu;
    switch(op) {
        case '+':
            resu = val1 + val2;
            break;
        case '-':
            resu = val1 - val2;
            break;
        case '*':
            resu = val1 * val2;
            break;
        case '/':
            resu = val1 / val2;
    }
    return resu;
}