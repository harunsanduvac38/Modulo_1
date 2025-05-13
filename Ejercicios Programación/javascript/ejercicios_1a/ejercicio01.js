const read = require('../leer.js');

let num, val_abs;

num = Number(read("Ingrese numero: "));

if(num < 0) {
    val_abs = num * -1;    
}else{
    val_abs = num;
}
console.log("Aqui el valor absoluto de tu numero");
console.log("|" + num + "| = " + val_abs);