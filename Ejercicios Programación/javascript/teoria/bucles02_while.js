//while

const read = require("../leer.js");

//El usuarios ingresará un número indeterminado de valores positivos.
//Al ingresar cero o un negativo, finaliza la carga de datos.

//Lectura con valor centinela.

let valor;

//Ingresar o leer el primer dato
valor = Number(read('Ingrese valor : '));

while(valor > 0){
    //Proceso
    console.log(valor);

    //leer siguiente
    valor = Number(read('Ingrese valor : '));
}
console.log("FIN");