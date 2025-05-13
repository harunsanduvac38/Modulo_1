const read = require("../leer.js");

let num1, num2, num3;

num1 = Number(read("Para comparar tres numeros ingrese un numero : "));
num2 = Number(read("Ingrese otro : "));
num3 = Number(read("Ingrese el ultimo : "));


if (num1 > num2 && num1 > num3){
    console.log(`El mayor numero es : ${num1}`);

    if(num2 > num3){
        console.log("El menor numero es :" + num3)
    }
    else{
        console.log("El menor numero es : " + num2)
    }
}else if(num1 > num2){
    console.log("El mayor numero es : " + num3 + "\n" + "El menor numero es :" +num2);
}   
else if(num1 > num3){
    console.log("El mayor numero es : " + num2 + "\n" + "El menor numero es : " + num3);
}

if(num2 > num3 && num2 > num1){console.log("El mayor numero es : " + num2)
       if(num1 > num3){
        console.log("El menor numero es : " + num3)
        }        
        else{console.log("El mayor numero es :" + num2 + "\n" + "El menor numero es : " + num1)
        }
    }else{
    console.log("El mayor numero es : " + num3 + "\n" + "El menor numero es :" + num1)
    }





                




