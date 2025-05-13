const read = require("../leer.js");

main();

function main(){
let valor1 = read("un numero : ");
let valor2 = read("otro : ");
console.log(valor_abs(valor1,valor2));
}

function valor_abs(valor1, valor2){
    if((valor1 - valor2) < 0){
        return (valor1 - valor2) *-1;
    }else{
        return valor1 - valor2;
    }
}

