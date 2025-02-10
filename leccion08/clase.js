//Clases con set y get, Palabra reservada static, atributos static y no static
class persona {
    static estatico = "dato estatico, se llama con la clase";
    normal = "dato normal, se llama desde objeto instanciado";

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
    static metodo_static (objeto_persona){
        console.log("llamando al metodo estatico " + objeto_persona.nombre)
    }
}
let persona1 = new persona("Sidney","Sahonero");
console.log(persona1);




//Herencia y sobreescritura
class empleado extends persona {
    constructor(nombre, apellido, trabajo){
        super(nombre, apellido);
        this._trabajo = trabajo;
    }
    get trabajo(){
        return this._trabajo;
    }
    set trabajo(trabajo){
        this._trabajo = trabajo;
    }
    nombreCompleto(){ //sobreescritura, usamos un metodo del heredado y le agregamos cosas
        return super.nombreCompleto() + ", " + this._trabajo;
    }
}
let persona2 = new empleado("Angelly", "Garrado", "Oficinista");
console.log(persona2);
console.log(persona2.nombreCompleto());




// llamando variables estaticas y normales. llamando metodo statico
console.log(persona.estatico);
console.log(persona2.normal);
console.log(persona.metodo_static(persona1));