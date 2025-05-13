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


let num = Number(read("Ingrese un Numero : "));

for(let i = 1; i <= num; i++){
    console.log();
    for(let k = 1; k <= i; k++){
        process.stdout.write("*");
    }
}

for(let i = 1; i <=num; i++){
    console.log()
    for(let k = num; k>=i; k--){
        process.stdout.write("*");
    }
}

for(let i = 1; i <= num; i++){
    console.log();
    for(let k =1; k <= num; k++){
        if(i <= k){
            process.stdout.write("*");
        }else{
            process.stdout.write(" ");
        }
    }
}

for(let i = num; i >= 1; i--){
    console.log();
    for(let k = 1; k <=num; k++){
        if(i <= k){
            process.stdout.write("*");
        }else{
            process.stdout.write(" ");
        }
    }
}
console.log();
