//crear arreglos
    let nombre = new Array ("Sidney", "Angelly", "Parca", "Jiwoo", "Stolas", "Fernando");
    const apellido = ["Sahonero", "Garrado", "Mamani", "Chavarria", "Zurita", "Gaspar"];
    console.log(nombre);
    console.log(apellido);


//recorrer arreglo o ver elemento de arreglo
    console.log(nombre[3]);
    for (let i = 0; i < apellido.length; i++) {
        console.log(i + ".  " + apellido[i]);
    }


//modificar elementos de un arreglo, agregar ultimo elemento
    nombre.push("NUEVO");
    console.log(nombre);