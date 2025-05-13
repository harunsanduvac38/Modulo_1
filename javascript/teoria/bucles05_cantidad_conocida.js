const read = require("../leer.js");

let cant = Number(read('Cuantos numeros quieres procesar : '));
//let cont = 1;

let valor;

/*while(cont <= cant){
    valor = Number(read("Ingrese valor : "));
    console.log(`Procesando ${valor}`);
    cont++;
}*/


for(let i = 1; i <= cant; i++){
    valor = Number(read("Ingrese valor : "));
    console.log(`Procesando ${valor}`);
}

