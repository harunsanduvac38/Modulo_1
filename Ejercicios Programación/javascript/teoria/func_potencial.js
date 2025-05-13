const read = require("../leer.js");

main();

function main(){
    let valor = Number(read("Ingrese un valor : "));
    let potencial = cuadrado(valor);
    console.log("El valor cuadrado = " + potencial);
}

function cuadrado(valor){
    return valor * valor;
}



