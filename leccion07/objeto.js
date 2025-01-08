//Crear un Objeto, con variables y metodos
let persona = {
    nombre: "Sidney",
    apellido: "Sahonero",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}




//Otras formas de crear objetos
let persona2 = new Object();
persona2.nombre = "Angelly";




//Acceder a las propiedades de los objetos
console.log(persona.apellido);
console.log(persona["nombre"]);
console.log(persona.nombreCompleto());

for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}
let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);




//Agregar y eliminar las propiedades de un objeto
persona2.telefono = 74834497;
persona2.correo = "sidney@gmail.com";
console.log(persona2);

delete persona2.nombre;
console.log(persona2);