const read = require("../leer.js");

//El usuarios ingresará un número indeterminado de valores positivos.
//Al ingresar cero o un negativo, finaliza la carga de datos.
//El programa deberá mostrar la cantidad de valores ingresados.

//Lectura con valor centinela.

let valor;
let cont = 0
//Ingresar o leer el primer dato
valor = Number(read('Ingrese valor : '));

while(valor > 0){
    //Proceso
    console.log(valor);
    //cont = cont + 1;
    cont++;
    console.log(`Este vez es ${cont}`);

    //leer siguiente
    valor = Number(read('Ingrese valor : '));
}
console.log(`${cont} veces se ha repetido.`);
console.log("FIN");