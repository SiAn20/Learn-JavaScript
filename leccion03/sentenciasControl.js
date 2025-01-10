//Sentencias if y else
if (10>1) {
    console.log("correcto");
} else {
    console.log("incorrecto");
}




//EJERCICIO ifelse: cual es el numero del 1 al 5
let numero = 4;
if (numero == 1) {
    console.log("Número 1");
} else if (numero == 2) {
        console.log("Número 2");
} else if (numero == 3) {
    console.log("Número 3");
} else if (numero == 4) {
    console.log("Número 4");
} else if (numero == 5) {
    console.log("Número 5");
} else {
    console.log("Valor desconocido");
}




//EJERCICIO ifelse: Evaluar estacion del mes en Bolivia
let mes = 5;
let estacion;
if (mes>=9 && mes<=11) {
    estacion = "Primavera";
}else if (mes==1 || mes==2 || mes==12) {
    estacion = "Verano";
}else if (mes>=3 && mes<=5) {
    estacion = "Otoño";
}else if (mes>=6 && mes<=8) {
    estacion = "Invierno";
}else {
    estacion = "Mes no válido";
}
console.log(estacion);




//Sentencia switch: cual es el numero del 1 al 5
let numero2 = 3;
let valor = "Valor no conocido";
switch (numero2) {
    case 1:
        valor = "uno"
        break;
    case 2:
        valor = "dos"
        break;
    case 3:
        valor = "tres"
        break;
    case 4:
        valor = "cuatro"
        break;
    case 5:
        valor = "cinco"
        break;
    default:
        valor = "valor no encontrado"
        break;
}
console.log(valor);