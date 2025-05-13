// Solicitar una fecha (día, mes, año) y validar si es una fecha correcta sin contemplar años
// bisiestos, es decir, no se puede ingresar 29 2 xxxx.

const read = require('../leer.js');
const {esFechaValida} = require('./fechas.js');

let dia = Number(read('Ingrese dia: '));
let mes = Number(read('Ingrese mes: '));
let anyo = Number(read('Ingrese año: '));

if (esFechaValida(dia, mes, anyo))
    console.log('fecha correcta');
else
    console.log('fecha incorrecta');


