
//Metofo get, para no usar function y llamarlo mas facilmente
//Método set, para que sea información alterable
let persona = {
    nombre: "Sidney",
    apellido: "Sahonero",
    edad: 20,
    cumple: "01/01/2004",
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




//