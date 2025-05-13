const read = require('../leer.js');

/*Escribir un programa que reciba un número n e imprima los primeros n números
triangulares, junto con su índice. Los números triangulares se obtienen mediante la suma
de los números naturales desde 1 hasta el índice n. Por ejemplo, el número triangular de
índice 4 es 1+2+3+4 = 10.
Entonces, si se piden los primeros 5 números triangulares, el programa debe imprimir (sin
los comentarios entre paréntesis):
1 – 1 (1)
2 – 3 (1+2)
3 – 6 (1+2+3)
4 – 10 (1+2+3+4)
5 – 15 (1+2+3+4+5) */

let numero,suma;
suma = 0;
numero = Number(read('Un numero : '));
for(let i = 0; i <= numero; i++){
    suma += i;
    console.log(`${i} - ${suma}`);
}