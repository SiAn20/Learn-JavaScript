
//Metofo get, para no usar function y llamarlo mas facilmente
//Método set, para que sea información alterable
let persona = {
    nombre: "Sidney",
    apellido: "Sahonero",
    edad: 20,
    idioma: "castellano",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(Lang){
        this.idioma = Lang;
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}
console.log(persona.lang);
persona.lang = "Ingles";
console.log(persona.lang);




//Metodo constructor con funciones dentro
function Persona (name, apell){
    this.name = name;
    this.apelli = apell;
    this.nameCompleto = function(){
        return this.name + " " + this.apelli;
    }
}
let padre = new Persona("pedro", "Sanchez");
console.log(padre);




//Prototype para agregar un atributo con el mismo valor a todos los objetos
Persona.prototype.celular = 74834497;
console.log(padre.celular); // el mismo a todos los objetos
padre.celular = 11111111;
console.log(padre.celular);// se cambio solo para el objeto padre




//call y sus parámetros, para usar funciones de otros objetos
let auto = { 
    marca: "no se de autos",
    costo: "78000",
    dato: function(color, generación){
        return this.marca + ", " + this.costo + ", " + color + ", " + generación;
    }
}
let auto2 = {
    marca: "Gatito",
    costo: "58000"
}
console.log(auto.dato.call(auto2, "rojo", 2005)); //auto2 usa la funcion de auto sin tenerla