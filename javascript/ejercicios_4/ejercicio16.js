const read = require("../leer.js");

/* Escriba un programa que nos calcule el cambio que debe dar la caja de un supermercado:
Dado un precio y una cantidad de dinero, el programa nos dirá cuántas monedas deben
darse como cambio de tal forma que el número total de monedas sea mínimo. */

let precio = Number(read("Ingrese el Precio : "));
let dinero = Number(read("Ingrese el Dinero : "));
//El cambio en centimo
let cambio = (dinero - precio) * 100;
// Cantidad de los monedas : 
let uno = dos = cinco = diez = veinte = cincuenta = cien = doscientos = 0;
//Cantidad de los billetes : 
let quinientos = mil = dosmil = cincomil = diezmil = veintemil = 0;

console.log();
console.log(`El cambio es : `);
if(cambio >= 20000){
    veintemil = Math.trunc(cambio / 20000);
    cambio = cambio % 20000;
}
if(cambio >=10000){
    diezmil = Math.trunc(cambio/10000);
    cambio = cambio % 10000;
}
if(cambio >=5000){
    cincomil = Math.trunc(cambio/5000);
    cambio=cambio%5000;
}
if(cambio>=2000){
    dosmil = Math.trunc(cambio/2000);
    cambio=cambio%2000;
}
if(cambio>=1000){
    mil = Math.trunc(cambio/1000);
    cambio=cambio%1000; 
}
if(cambio>=500){
    quinientos = Math.trunc(cambio/500);
    cambio=cambio%500;
}
if(cambio>=200){
    doscientos = Math.trunc(cambio/200);
    cambio=cambio%200;
}
if(cambio>=100){
    cien = Math.trunc(cambio/100);
    cambio=cambio%100;
}
if(cambio>=50){
    cincuenta = Math.trunc(cambio/50);
    cambio=cambio%50;
}
if(cambio>=20){
    veinte=Math.trunc(cambio/20);
    cambio=cambio%20;
}
if(cambio>=10){
    diez = Math.trunc(cambio/10);
    cambio=cambio%10;
}
if(cambio>=5){
    cinco =Math.trunc(cambio/5);
    cambio=cambio%5;
}
if(cambio>=2){
    dos = Math.trunc(cambio/2);
    cambio=cambio%2;
}

console.log();

console.log(veintemil + " -> 200€");
console.log(diezmil + " -> 100€");
console.log(cincomil + " -> 50€");
console.log(dosmil + " -> 20€");
console.log(mil + " -> 10€");
console.log(quinientos + " -> 5€");
console.log(doscientos + " -> 2€");
console.log(cien + " -> 1€");
console.log(cincuenta + " -> 50 Cent");
console.log(veinte + " -> 20 Cent");
console.log(diez + " -> 10 Cent");
console.log(cinco + " -> 5 Cent");
console.log(dos + " -> 2 Cent");
console.log(Math.trunc(cambio) + " -> 1 Cent");


