const read = require("../leer.js");


/*Se solicitará al usuario que ingrese números reales para procesar. Luego de ingresar cada número,
 se le preguntará si quiere ingresar más o no, leyendo la cadena “s” o “n”.
Cuando indique que no ingresa más números, mostrar la cantidad de valores ingresados, el primer
valor, el último, el mayor y el menor.*/

let número, númeroprimer, respuesta, cont, contultimo, númeromayor, númeromenor, númeroúltimo;



cont = 1;
respuesta = "s"


número = (read("Ingrese un número : "));

while(!(número <= 0 || número >= 0)){
    console.log(`Has ingresado un valor no válido.`);
    número = Number(read("Ingrese un número : "));
}
númeroprimer = número;
númeromenor = número;
númeroúltimo = número;
númeromayor = número;
respuesta = String(read("¿Quieres seguir ? (s - n) :"));

while(respuesta !== "s" && respuesta !== "n"){
    console.log("Has ingresado un valor no válido. " + "\n")
    respuesta = String(read("¿Quieres seguir ? (s - n) :"));
}

while(respuesta == "s"){
    cont++;

    número = Number(read("Ingrese un número : "));

    while(!(número <= 0 || número >= 0)){
        console.log(`Has ingresado un valor no válido.`);
        número = Number(read("Ingrese un número : "));
    }
    contultimo = cont + 1;

    respuesta = String(read("¿Quieres seguir ? (s - n) :"));

    while(respuesta !== "s" && respuesta !== "n"){
        console.log("Has ingresado un valor no válido. " + "\n")
        respuesta = String(read("¿Quieres seguir ? (s - n) :"));
    }    

    if(respuesta !== "s"){
        númeroúltimo = número;
    }
    if(número > númeromayor){
        númeromayor = número;
    }
    if(número < númeromenor){
        númeromenor = número;
    }
}

console.log("\n" + "La cantidad de los valores ingresados : " + cont + "\n");

console.log("El primer valor : " + númeroprimer + "\n");

console.log("El último valor : " + númeroúltimo + "\n");


console.log(`El mayor valor : ${númeromayor} \n`);

console.log(`El menor valor : ${númeromenor}` + "\n");




