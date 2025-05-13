const read = require("../leer.js");
/*Escribir un programa que pida al usuario un número, que representará una cantidad de
dinero expresada en euros. A continuación, el programa le ofrecerá un menú al usuario en
el que le preguntará a qué divisa quiere convertir del dinero e imprimirá la conversión. 
Las posibles divisas son las siguientes (se indica el tipo de cambio):
• Dólares (1 dólar = 0,88 euros)
• Libra Esterlina (1 Libra = 1,20 euros)
• Yen (1 yen = 0,0077 euros).
• Dólares Canadienses (1 dólar C. = 0,71 euros)*/

let menuPrincipal = Boolean(true);


console.log("Bienvenido al Programa de Convertir Euro" + "\n" + "``````````````````````````````````````````````````");
let euro = Number(read("Ingrese un valor en Euro : "));
let dolar = euro / 0.88;
let libra = euro / 1.2;
let yen = euro / 0.0077;
let dolarCan = euro / 0.71;
otraDivisa = Boolean(true);
let respuesta;

do{
console.log("1 -> Convertir Euro a Dolar" + "\n" + "2 -> Convertir Euro a Libra" + "\n" + "3 -> Convertir Euro a Yen" + "\n" + "4 -> Convertir Euro a Dolar Canadiense" + "\n" + "5 -> Ingresar la cantidad otra vez" + "\n" + "6 -> Salir");
respuesta = read("\n" + "Elige un opcion del menu : ");
    if(respuesta == 5 || respuesta == 6){
        otraDivisa = false;
    }
    while(otraDivisa){
        if(respuesta == 1){
            console.log(euro + " Euro = " + dolar + " Dolar" + "\n");
        }
        if(respuesta == 2){
            console.log(euro + " Euro = " + libra + " Libra" + "\n");
        }
        if(respuesta == 3){
            console.log(euro + " Euro = " + yen + " Yen" + "\n");
        }
        if(respuesta == 4){
            console.log(euro + " Euro = " + dolarCan + " Dolar Canadiense" + "\n");
        }
        let volverMenu = read("1 -> Elegir otra divisa " + "\n" + "2 -> Ingresar otro valor" + "\n" + "Elige un opcion del menu : ");
            if(volverMenu == 2){
            euro = Number(read("\n" + "Ingrese un valor en Euro : "));
            otraDivisa = false;
        }else
            if(volverMenu == 1){
            otraDivisa = true;
            let cualDivisa = Number(read("\n" + "1 -> Convertir Euro a Dolar" + "\n" + "2 -> Convertir Euro a Libra" + "\n" + "3 -> Convertir Euro a Yen" + "\n" + "4 -> Convertir Euro a Dolar Canadiense" + "\n" + "Elige un opcion del menu : "));
            respuesta = cualDivisa;
        }
    }
    if(respuesta == 5){
        menuPrincipal = true;
        euro = Number(read("\n" + "Ingrese un valor en Euro : "));
        cualDivisa = Number(read("\n" + "1 -> Convertir Euro a Dolar" + "\n" + "2 -> Convertir Euro a Libra" + "\n" + "3 -> Convertir Euro a Yen" + "\n" + "4 -> Convertir Euro a Dolar Canadiense" + "\n" + "Elige un opcion del menu : "));
        respuesta = cualDivisa;
        otraDivisa = true;
    }
    if(respuesta == 6){
        menuPrincipal = false;
        otraDivisa = false;
        console.log("\n" + "Muchas gracias, hasta luego" + "\n" + "¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨")
    }
}while(menuPrincipal);

