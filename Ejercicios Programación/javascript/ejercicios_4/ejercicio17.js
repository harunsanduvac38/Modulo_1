const read = require("../leer.js");

/* Realizar el juego “Adivina número”. El ordenador debe generar un número “secreto”
aleatorio con las siguientes características:
- Debe tener 4 dígitos diferentes
- No puede comenzar en 0
El usuario debe adivinarlo, para ello irá ingresando números de 4 cifras y el programa le
indicará la cantidad de dígitos correctos y la cantidad de dígitos regulares. Un dígito es
correcto cuando está en la posición que le corresponde y es regular si está en el número
secreto, pero en otra posición.
Imagine que el ordenador genera el número 1207 */ 

let numSec1, numSec2, numSec3, numSec4, numeroSecreto;

function generar(){
    return Math.trunc((Math.random() * 9)+1);
}

numSec1 = generar();

do{
    numSec2 = generar();
}while(numSec1 == numSec2);

do{
    numSec3 = generar();
}while(numSec3 == numSec2 || numSec3 == numSec1);

do{
    numSec4 = generar();
}while(numSec4 == numSec1 || numSec4 == numSec2 || numSec4 == numSec3);

numeroSecreto = `${numSec1}${numSec2}${numSec3}${numSec4}`

let correcto = false;
let numeroAdi;
let cantInt = 0;

do{
    numeroAdi = Number(read("Adivina Numero : "));
    let numAdi1 = Math.trunc(numeroAdi/1000);
    let numAdi2 = Math.trunc((numeroAdi % 1000)/100);
    let numAdi3 = Math.trunc(((numeroAdi %1000) %100) / 10);
    let numAdi4 = Math.trunc(numeroAdi%10);
    cantInt++;
    let cantBueno = cantRegular = 0;

    
    if(numeroSecreto == numeroAdi){
        correcto = true;
    }else{
        if(numSec1 == numAdi1){
            cantBueno++;
        }else{
            if(numSec1 == numAdi2 || numSec1 == numAdi3 || numSec1 == numAdi4){
                cantRegular++;
            }
        } 
        if(numSec2 == numAdi2){
            cantBueno++;
        }else{
            if(numSec2 == numAdi1 || numSec2 == numAdi3 || numSec2 == numAdi4){
                cantRegular++;
            }
        }
        if(numSec3 == numAdi3){
            cantBueno++;
        }else{
            if(numSec3 == numAdi1 || numSec3 == numAdi2 || numSec3 == numAdi4){
                cantRegular++;
            }
        }
        if(numSec4 == numAdi4){
            cantBueno++;
        }else{
            if(numSec4 == numAdi1 || numSec4 == numAdi2 || numSec4 == numAdi3){
                cantRegular++;
            }
        }
    console.log(`Tienes ${cantBueno} buenos y ${cantRegular} regulares.`)
    }

}while(!correcto);

console.log(`Has acertado en ${cantInt} intento!!`);

