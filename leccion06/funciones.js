//Funcion de suma
function suma (a,b) {
    alert("la suma es:  " + (a+b));
}
suma(1,2)




//Uso del return
function resta (c,d) {
    return (c-d);
}
let resultadoResta = resta(3,4);
alert("la resta es:  " + resultadoResta);




//Funciones de tipo expresion
let division = function(e,f){return (e/f)};
let resultadoDivision = division(10,5);
alert("la division es:  " + resultadoDivision);




//Funciones self invoking, funcion que se llama a si misma
(function (g,h){
    alert("la multiplicación es:  " + (g*h));
})(5,6)




//Funciones flecha
const moduloFuncion = (i,j) => (i%j);
let resultadoModuloFuncion = moduloFuncion(9,2);
alert("el modulo es:  " + resultadoModuloFuncion);