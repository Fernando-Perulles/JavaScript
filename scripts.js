function main () { // Función principal para llamar a las demás funcionalidades.
    let cantidadCapturada, x;

    if (document.getElementById('CtdCapturada').value != "") {
        cantidadCapturada = document.getElementById('CtdCapturada').value;
        
        //x = validarCaracteres(cantidadCapturada);
        //console.log("la función regresa " + x);
        if (validarCaracteres(cantidadCapturada) > 0) {
            separarEnterosDecimales(cantidadCapturada);
        } else {
            console.log("Nada");
        }
        
    } else {
        alert("Favor de capturar una cantidad");
    }
    
}

function validarCaracteres(cantidad) { // Función para validad que la cantidad capturada solo contenga digitos y punto decimal.
    let contieneNumeros;
    
    if (!/^([0-9])*[.]?[0-9]*$/.test(cantidad)) {
        contieneNumeros = 0;
        alert("El valor " + cantidad + " no es un número");
        limpiarDatos();
    } else {
        contieneNumeros = 1;
    }
    
    return contieneNumeros;
}

function separarEnterosDecimales (cantidad) { // Función para validar si la cantidad capturada tiene parte decimal.
    let existenDecimales, enteros, decimales, validacionPunto, flag;
    
    validacionPunto = /[.]/g;
    flag = cantidad.search(validacionPunto);

    if (flag === -1) {
        
        enteros = cantidad;
        validarParteEntera (enteros);

    } else {
        existenDecimales = cantidad.indexOf(".");
        enteros = cantidad.substr(0,existenDecimales);
        decimales = cantidad.substr(existenDecimales + 1);
        console.log("Enteros " + enteros + " decimales " + decimales);
    }

    return enteros, decimales;
}

function validarParteEntera (enteros) { // Función para validar la parte entera de la cantidad capturada.
    let base = ["U", "D", "C", "UM", "DM", "CM", "UMi", "DMi", "CMi"]
    let posiciones = enteros.length;

    switch (posiciones) {
        case 1:
            console.log("Cantidad en " + base[0]);
            encontrarUnidades (enteros);
            break;
        case 2:
            console.log("Cantidad en " + base[1]);
            break;
        case 3:
            console.log("Cantidad en " + base[2]);
            break;
        case 4:
            console.log("Cantidad en " + base[3]);
            break;
        case 5:
            console.log("Cantidad en " + base[4]);
            break;
        case 6:
            console.log("Cantidad en " + base[5]);
            break;
        case 7:
            console.log("Cantidad en " + base[6]);
            break;
        case 8:
            console.log("Cantidad en " + base[7]);
            break;
        case 9:
            console.log("Cantidad en " + base[8]);
            break;
        default:
            console.log("No tiene parte entera");
    }
}

function encontrarUnidades (enteros) { // Función para localizar la cadena correspondiente al digito que se valida.
    let unidades = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    
    enteros = enteros * 1;

    switch (enteros) { 
        case 1:
            document.getElementById('cantidadLetra').innerHTML = unidades[0];
            break;
        case 2:
            document.getElementById('cantidadLetra').innerHTML = unidades[1];
            break;
        case 3:
            document.getElementById('cantidadLetra').innerHTML = unidades[2];
            break;
        case 4:
            document.getElementById('cantidadLetra').innerHTML = unidades[3];
            break;
        case 5:
            document.getElementById('cantidadLetra').innerHTML = unidades[4];
            break;
        case 6:
            document.getElementById('cantidadLetra').innerHTML = unidades[5];
            break;
        case 7:
            document.getElementById('cantidadLetra').innerHTML = unidades[6];
            break;
        case 8:
            document.getElementById('cantidadLetra').innerHTML = unidades[7];
            break;
        case 9:
            document.getElementById('cantidadLetra').innerHTML = unidades[8];
            break;
        default:
            document.getElementById('cantidadLetra').innerHTML = null;
            console.log("Existe un error con el valor");
    }

}

function limpiarDatos () { // Función para limpiar controles.
    document.getElementById("CtdCapturada").value = "";
    document.getElementById('cantidadLetra').innerHTML = null;
}