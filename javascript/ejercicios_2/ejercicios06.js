const read = require("../leer.js");

/*El programa generará un número aleatorio entre 0 y 100 y le pedirá al usuario que lo adivine. 
Cuando el usuario ingrese el número para ver si acertó, el programa le indicará si
el número a adivinar es mayor, menor o bien si acertó. Cuando acierte, finaliza.
Para generar un número aleatorio entre 0 y 100:
int numero = (int)(Math.random() * 101);*/

let adivinaja;
let centinela = Boolean(false);

let número = Math.floor(Math.random() * 101);
adivinaja = Number(read("Adivina el número que he generado aleatorio entre 0 y 100 : "));


while(centinela == false){
    if(número > adivinaja){
        console.log("\n" + "El número es mayor que tu adivinaja, intenta otra vez.");
    }else
        if(número < adivinaja){
        console.log(`\nEl número es menor que tu adivinaja, intenta otra vez.`);
        }
    adivinaja = Number(read("Adivina el número que he generado aleatorio entre 0 y 100 : "));
    

    if(número == adivinaja){
        centinela = true;
    }
}

console.log("\n" + "Sí, es correcto. ¡Enhorabuena!" + "\n" + "¡Adiós!");




