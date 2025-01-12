//Clases con set y get
class persona {
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




//