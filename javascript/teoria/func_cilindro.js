const read = require("../leer.js");

main();

function main(){
    let radio = Number(read("Ingrese radio : "));
    let h = Number(read("Ingrese altura : "));
    let volumen = areaCirculo(radio) * h;
    console.log("volumen : " + volumen);
}

function areaCirculo(radio){
    return Math.PI* radio**2;
}