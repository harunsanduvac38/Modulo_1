const read = require("../leer.js");

/* Escriba un programa que imprima los siguientes patrones por separado, uno debajo del
siguiente, una vez que el usuario ingresó el tamaño, por ejemplo 5. Utilice ciclos for para
generar los patrones. Todos los asteriscos deberán ser impresos por un solo enunciado print
de la forma print(‘*’). Sugerencia: los dos últimos patrones requieren que cada línea
comience con un número correcto de espacios en blanco: print(‘ ’).
*        *****     *****         *
**       ****       ****        **
***      ***         ***       ***
****     **           **      ****
*****    *             *     *****

 */

let numero = Number(read("Ingrese un Numero : "));

for(let i = 1; i <= numero; i++){
    console.log(" ")
    for(let y = 1; y <=i; y++){
        process.stdout.write("*");
    }
}

for(let i = 1; i <= numero; i++){
    console.log(" ")
    for(let k = numero; k >= i ; k--){
        process.stdout.write("*");
    }
}

for(let i = 1; i<=numero; i++){
    console.log("  ");
    for(let m = numero; m >= i; m--){
        if(m == numero){
            for(let n = 1; n < i; n++){
            process.stdout.write(" ");
            }
        }
        process.stdout.write("*"); 
    }
    
}
console.log();

for(let i = 1; i <= numero; i++){
    console.log("");
    for(let j = 1; j + i <= numero; j++){
        process.stdout.write(" ");
        if(i + j == numero){
            for(let z = i + j; z <= numero + i; z++){
             process.stdout.write("*");
            }
        }
    }
}



console.log("\n");

