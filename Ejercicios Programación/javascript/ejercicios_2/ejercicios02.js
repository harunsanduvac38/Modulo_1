/*Dado un número indefinido de notas obtenidas por alumnos en sus exámenes, mostrar por
pantalla la nota mayor y la nota menor. (Cuando el usuario ingrese -1 finaliza la carga)*/

const read = require("../leer.js");

let nota, notamayor, notamenor;
nota = notamayor = notamenor = 0;
nota = Number(read('Ingrese una nota : '));
notamenor = nota
while(nota != -1){
    
    if(nota > notamayor){
        notamayor = nota;
    }
    if(notamenor > nota){
        notamenor = nota;
    }
    nota = Number(read('Ingrese una nota : '));
}

console.log(`La mayor nota es ${notamayor}, la menor nota es ${notamenor} `);
