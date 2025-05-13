
function nombreMes(mes) {
    let nombre;
    switch(mes) {
        case 1:
            nombre = 'Enero';
            break;
        case 2:
            nombre = 'Febrero';
            break;
        case 3:
            nombre = 'Marzo';
            break;
        case 4:
            nombre = 'Abril';
            break;
        case 5:
            nombre = 'Mayo';
            break;
        case 6:
            nombre = 'Junio';
            break;
        case 7:
            nombre = 'Julio';
            break;
        case 8:
            nombre = 'Agosto';
            break;
        case 9:
            nombre = 'Septiembre';
            break;
        case 10:
            nombre = 'Octubre';
            break;
        case 11:
            nombre = 'Noviembre';
            break;
        case 12:
            nombre = 'Diciembre';
            break;
    }
    return nombre;
}

function cantDiasMes(mes) {
    cantDias = 31;
    switch (mes) {
        case 2:
            cantDias = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            cantDias = 30;
    }
    return cantDias;
}

function esFechaValida(dia, mes, anyo) {
    if (anyo < 0)
        return false;
    if (mes < 0 || mes > 12)
        return false;
    let cantidadDias = cantDiasMes(mes);
    if (esBisiesto(anyo) && mes == 2)
        cantidadDias ++;
    if (dia < 0 || dia > cantidadDias)
        return false;

    return true;
}

function esBisiesto(anyo) {
    return anyo % 400 == 0 || anyo % 4 == 0 && anyo % 100 != 0;
}

module.exports = {nombreMes, cantDiasMes, esFechaValida};