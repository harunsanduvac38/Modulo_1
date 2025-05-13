const read = require("../leer.js");

/*Escribir un programa que pida al usuario un número, que representará una cantidad de
dinero expresada en euros. A continuación, el programa le ofrecerá un menú al usuario en
el que le preguntará a qué divisa quiere convertir del dinero e imprimirá la conversión. 
Las posibles divisas son las siguientes (se indica el tipo de cambio):
• Dólares (1 dólar = 0,88 euros)
• Libra Esterlina (1 Libra = 1,20 euros)
• Yen (1 yen = 0,0077 euros).
• Dólares Canadienses (1 dólar C. = 0,71 euros)*/

console.log("Bienvenido al Programa de Convertir Dinero" + "\n" + "       =========     ");

let euro = Number(read("La cantidad de Euro : "));
let dolar = euro / 0.88;
let libra = euro / 1.2;
let yen = euro / 0.0077;
let dolarCan = euro / 0.71;
let salir = Boolean(true);
let otraVez;

do{
    divisa = read("A que divisa quieres convertir ?" + "\n" +"1 -> A Dolar" + "\n" + "2 -> A Libra" + "\n" + "3 -> A Yen" + "\n" + "4 -> A Dolar Canadiense" + "\n" + "   ->");
    if(divisa == 1){
        console.log(euro + " Euro = " + dolar + " Dolar");
    }
    if(divisa == 2){
        console.log(euro + " Euro = " + libra + " Libra");
    }
    if(divisa == 3){
        console.log(euro + " Euro = " + yen + " Yen");
    }
    if(divisa == 4){
        console.log(euro + " Euro = " + dolarCan + " Dolar Canadiense");
    }
    do{
        otraVez = (read("Quieres convertir a otra divisa? (s - n) : "));
    }while(!((otraVez == "s" || otraVez == "S") || (otraVez == "N" || otraVez == "n")));

    if(otraVez == "n" || otraVez == "N"){
        salir = false;
        console.log("Muchas Gracias!");
    }
}while(salir);