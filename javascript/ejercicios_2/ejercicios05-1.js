const read = require("../leer.js");

/*Se solicitará al usuario que ingrese números reales para procesar. Luego de ingresar cada número,
 se le preguntará si quiere ingresar más o no, leyendo la cadena “s” o “n”.
Cuando indique que no ingresa más números, mostrar la cantidad de valores ingresados, el primer
valor, el último, el mayor y el menor.*/


let valor, dato, cont, primervalor, últimovalor, elmayor, elmenor;

elmayor = 0;
cont = 1;

valor = Number(read("Ingrese un número : "));
dato = read("Quieres seguir (s - n) : ");

primervalor = valor;
elmenor = valor;

while(dato == "s"){
    cont += 1;
    valor = Number(read("Ingrese un número : "));
    dato = read("Quieres seguir (s - n) : ");
    if(valor > elmayor){
        elmayor = valor
    }
    if(valor < elmayor){
        elmenor = valor;
    }
}

últimovalor = valor;

console.log(`\n La cantidad de valores ingresados ${cont}`);
console.log("\n" + "El primer valor : " + primervalor);
console.log(`\n El último valor : ${últimovalor}`);
console.log(`\n El mayor valor es : ${elmayor}`);
console.log("\n" + "El menor valor es : " + elmenor);



