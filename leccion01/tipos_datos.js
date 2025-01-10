//Tipos de Datos
var nombre = "Sidney Sahonero Garrado"; //String
console.log(nombre);

var numero = 2005; //numerico
console.log(numero);

var object = { //objeto
    name: "Sidney",
    apellido: "Sahonero",
    edad: 19
};
var objeto2 = null;
console.log(object);
console.log(typeof objeto2);

var verdad = true; //booleano
console.log(verdad);

function mifuncion(){} //function
class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(mifuncion);
console.log(typeof persona);

var x; //undefined
console.log(typeof x);




//saber los tipos de datos
var tipo = "primero cadena";
console.log(typeof tipo);
tipo = 20012005;
console.log(typeof tipo);




//Arrays
var pelicula = ['goblin','cd'];
console.log(pelicula);
console.log(typeof pelicula);//object




//Uso de lef const
let sid = "variable"
console.log(sid);

const ang = "no puede cambiar o provocara un error";
console.log(ang);