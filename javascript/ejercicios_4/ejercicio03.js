const read = require("../leer.js");

/*Modifique el programa anterior para que imprima el perímetro del cuadrado de la siguiente
manera:
****
*  *
*  *
****             */

let numero = Number(read('Un Numero : '));

for (let i = 1; i <= numero; i++){
    process.stdout.write('\n');
    for(let y = 1; y <= numero; y++){
        if(i == numero || y == numero || i == 1 || y == 1){
            process.stdout.write("*");
        }else{
            process.stdout.write(' ');
        }
    }
}
console.log(`\n Gracias! \n`);