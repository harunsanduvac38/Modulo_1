const read = require("../leer.js");

//El usuarios ingresará un número indeterminado de valores positivos.
//Al ingresar cero o un negativo, finaliza la carga de datos.
//El programa deberá mostrar la cantidad de valores ingresados.

//Lectura con valor centinela.

let valor;
let suma = 0;

valor = Number(read('Ingrese valor : '));

while(valor > 0){
    //Proceso
    console.log(valor);
    //suma = suma + valor;
    suma += valor;
    console.log(suma);

    //leer siguiente
    valor = Number(read('Ingrese valor : '));
}
console.log(`${suma} es la suma de los valores.`);
console.log("FIN");