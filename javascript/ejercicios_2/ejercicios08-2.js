const read = require("../leer.js");

/*Escribir un programa que pida al usuario un número, que representará una cantidad de
dinero expresada en euros. A continuación, el programa le ofrecerá un menú al usuario en
el que le preguntará a qué divisa quiere convertir del dinero e imprimirá la conversión. 
Las posibles divisas son las siguientes (se indica el tipo de cambio):
• Dólares (1 dólar = 0,88 euros)
• Libra Esterlina (1 Libra = 1,20 euros)
• Yen (1 yen = 0,0077 euros).
• Dólares Canadienses (1 dólar C. = 0,71 euros)*/

let euro, salir, opcion;
salir = Boolean(true);
do {
    euro = Number(read("Ingrese un valor en Euro : "));
}while(isNaN(euro));
do {
    console.log(`1 -> Dolar`);
    console.log(`2 -> Libra`);
    console.log(`3 -> Yen`);
    console.log(`4 -> Dolar Canadiense`);
    console.log(`5 -> Ingrese otro valor`);
    console.log(`6 -> Salir`);

    opcion = Number(read("ELige una opcion -> "));

    switch(opcion){
        case 1:
            console.log(`\n ${euro} Euros =  ${(euro / 0.88).toFixed(2)} Dolar(es) \n `);
            break;
        case 2:
            console.log(`\n ${euro} Euros = ${(euro / 1.2).toFixed(2)} Libras \n `);
            break;
        case 3:
            console.log(`\n ${euro} Euros = ${(euro / 0.0077).toFixed(2)} Yenes \n `);
            break;
        case 4:
            console.log(`\n ${euro} Euros = ${(euro / 0.71).toFixed(2)} Dolares Canadienses \n `);
            break;
        case 5:
            euro = Number(read("\n" + "Ingrese un valor en Euro : "));
            break;
        case 6 :
            salir = false;
            console.log(`Muchas Gracias! \n·····················`);
            break;
        default:
            console.log(`\n Valor incorrecto \n`);
    }
}while(salir);