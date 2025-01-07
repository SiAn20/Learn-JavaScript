let a=4, b=6;

//Operadores aritméticos
    let z = a + b;
    //console.log ("Resultado de la suma: " + z);

    z = a - b;
    //console.log ("Resultado de la resta: " + z);

    z = a * b;
    //console.log ("Resultado de la multiplicación: " + z);

    z = a / b;
    //console.log ("Resultado de la división: " + z);

    z = a ** b;
    //console.log ("Resultado de operador exponente: " + z);

    z = a % b;
    //console.log ("Resultado de operación modulo (residuo): " + z);


//Operadores de Incremento y decremento, misma logica para ambos
    //Pre-incremento, se cambia valor de la variabre a y luego se asigna a z
        z = ++a;
        //console.log(a);
        //console.log(z);

    //post incremento, se asigna el valor de a a z y luego se cambia el valor de a
        z = a++;
        //console.log(a);
        //console.log(z);


//Operador ternario como if y else
    let consulta = (1>3)? "verdadero" : "falso";
    //console.log(consulta)


//combertir string a numero
    let texto = "12345";
    let nuevoNumero = Number(texto);
    //console.log(typeof nuevoNumero)