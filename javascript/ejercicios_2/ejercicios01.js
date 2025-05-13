/*Dado un número indefinido de notas obtenidas por alumnos en sus exámenes, mostrar por
pantalla la nota mayor. (Cuando el usuario ingrese -1 finaliza la carga)*/

const read = require("../leer.js");

let nota, notamayor;
notamayor = 0;

nota = Number(read('Ingrese una nota : '));

while(nota != -1){
    if(nota > notamayor){
        notamayor = nota;
    }
    nota = Number(read('Ingrese una nota : '));
}

console.log(`La mayor nota es ${notamayor}`);

