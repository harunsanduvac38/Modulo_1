const read = require("../leer.js");

/*Dado un número indefinido de números enteros positivos y finalizando la carga con un 0 o
un negativo, obtener el siguiente informe:

Cantidad de valores procesados: XXX
Sumatoria de los valores: XXX
Media de los valores: XXX
Valor mayor: XXX
Valor menor: XXX
Cantidad de valores pares: XXX
Cantidad de valores impares: XXX*/



let numero, par, impar, suma, mayor, menor, cont, media;

numero = Number(read("Ingrese un numero : "));

menor = numero;
par = impar = suma = mayor = cont = 0;

while(numero > 0){
    suma = suma + numero;
    cont++;
    if((numero % 2) == 0){
        par++;
    }

    if((numero % 2) == 1){  
        impar++;
    }
    
    if(numero > mayor){
        mayor = numero;
    }

    if(numero < menor){
        menor = numero;
    }
    numero = Number(read("Ingrese un numero : "));
}

media = suma / cont;

console.log(`Cantidad de valores procesados : ${cont}`);

console.log(`Sumatoria de los valores: ${suma}`);

console.log(`Media de los valores : ${media}`);

console.log(`Valor mayor : ${mayor}`);

console.log(`Valor menor : ${menor}`);

console.log(`Cantidad de valores pares : ${par}`);

console.log(`Cantidad de valores impares : ${impar}`);
