/*Dado un número indefinido de notas obtenidas por alumnos en sus exámenes, mostrar por
pantalla la nota mayor, la nota menor y la cantidad total de notas procesadas. (Cuando el
usuario ingrese -1 finaliza la carga)*/

const read = require("../leer.js");

let nota, notamayor, notamenor, cont;

nota = notamayor = notamenor = cont = 0;

nota = Number(read("Ingrese una nota : "));
notamenor = nota;

while(nota != -1){
    if(notamayor < nota){
        notamayor = nota;
    }
    if(notamenor > nota){
        notamenor = nota;
    }
    nota = Number(read("Ingrese una nota : "));
    cont++;
    
}

console.log(`La mayor nota ${notamayor}, la menor nota es ${notamenor}`);
console.log(cont + " veces has ecrito");

