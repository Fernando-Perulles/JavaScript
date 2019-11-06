function obtenerNombrePagina() {    // Función para obtenr el nombre de la página, se eliminam la ruta y la extensión. 

    var pathCompleto = window.location.pathname;
    var nombrePagina = pathCompleto.split("/").pop();

        nombrePagina = nombrePagina.substring(0, nombrePagina.length - 5);
    
    return nombrePagina;

}

function direccionamientoPaginasAplicacion() {  // Función para "enviar" la página actual a la siguiente.

    var paginaBase = obtenerNombrePagina();

    switch (paginaBase) {

        case 'Index-login':
            window.location.href = "UA-Solicitud-Personal.html";
        break;

        case 'UA-Solicitud-Personal':
            window.location.href = "RH-Revision-Solicitud.html";
        break;

        case 'RH-Revision-Solicitud':
            window.location.href = "RH-Publicar-Convocatoria.html";
        break;

        case 'RH-Publicar-Convocatoria':
            window.location.href = "UA-Recepcion-Info-Candidatos.html";
        break;

        case 'UA-Revision-Observaciones-RH':
            window.location.href = "RH-Revision-Solicitud.html";
        break;

        case 'UA-Recepcion-Info-Candidatos':
            window.location.href = "UA-Seleccion-Candidato.html";
        break;

        case 'UA-Seleccion-Candidato':
            window.location.href = "Login-CVU.html";
        break;

        case 'Login-CVU':
            window.location.href = "DAIA-Revision-Probatorios.html";
        break;

        case 'DAIA-Revision-Probatorios':
            window.location.href = "UA-Consejo-Academico.html";
        break;

        case 'UA-Consejo-Academico':
            window.location.href = "Division-Aprobacion.html";
        break;

        case 'Division-Aprobacion':
            window.location.href = "Vicerrectoria-Aprobacion.html";
        break;

        case 'Vicerrectoria-Aprobacion':
            window.location.href = "RH-Formalizacion-Contratacion.html";
        break;

        default:
            console.log('No existe opción para direccionar');
    }

}

function ingresarAplicacion(seleccionarPagina) { // Función para controlar el direccionamiento de las páginas.

    switch (seleccionarPagina) {

        case 'Inicio':
            window.location.href = "UA-Solicitud-Personal.html";
        break;

        case 'Rechazo':
            window.location.href = "UA-Revision-Observaciones-RH.html";
        break;

        default:

    }

}

function fechaIngresoSolicitud() { // Funcion para mostrar la fecha y hora y darle formato

    var fechaActual = new Date();
    var anio = fechaActual.getFullYear();
    var mes = fechaActual.getMonth() + 1;
    var dia = fechaActual.getDate();

    var hora = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();

    var formatoTiempo = '' + ((hora > 12) ? hora - 12 : hora);

    if (hora == 0) 
        formatoTiempo = '12';
        formatoTiempo += ((minutos < 10) ? ':0' : ':') + minutos;
        formatoTiempo += ((segundos < 10) ? ':0' : ':') + segundos;
        formatoTiempo += (hora >= 12) ? ' P.M.' : ' A.M.'; 
    
    var fechaCompleta = anio + " / " + mes + " / " + dia + " - " + formatoTiempo;

    document.getElementById('horaFecha').innerHTML = fechaCompleta;
}

function limpiarParametros() { // Función para volver a cargar la página, con esta acción se elimina la información capturada en el formulario.

    location.reload(true);

}

function contenidoOpcionMenu() { // Función para ocultar y mostrar el contenido asociado a las opciones del menu.

    let paginaActual = obtenerNombrePagina();
    
    // console.log('llamado ' + paginaActual);
    
    switch (paginaActual) {

        case 'UA-Solicitud-Personal':

            document.getElementById('datosSolicitud').style.display = 'block';

        break;

        case 'RH-Revision-Solicitud':

            document.getElementById('datosSolicitud').style.display = 'block';

        break;

        case 'UA-Revision-Observaciones-RH':

            document.getElementById('datosSolicitud').style.display = 'block';

        break;

        case 'InforamcionSolicitud':

            document.getElementById('datosSolicitud').style.display = 'block';

        break;

        case 'RH-Publicar-Convocatoria':

            document.getElementById('datosSolicitud').style.display = 'block';

        break;

        case 'UA-Recepcion-Info-Candidatos':

            document.getElementById('solicitudPersonal').style.display = 'block';
            document.getElementById('informacionCandidatos').style.display = 'block';
       
        break;

        case 'UA-Seleccion-Candidato':

            document.getElementById('solicitudPersonal').style.display = 'block';
            document.getElementById('informacionCandidatos').style.display = 'block';

        break;

        case 'DAIA-Revision-Probatorios':

            document.getElementById('solicitudPersonal').style.display = 'block';
            document.getElementById('infoProbatoria').style.display = 'block';
        
        break;

        case 'UA-Consejo-Academico':

            document.getElementById('solicitudPersonal').style.display = 'block';
            document.getElementById('infoProbatoria').style.display = 'block';
            document.getElementById('consejoAcademico').style.display = 'block';

        break;

        case 'Division-Aprobacion':
            
            document.getElementById('solicitudPersonal').style.display = 'block';
            document.getElementById('aprobacionCandidato').style.display = 'block';
        
        break;

        case 'Vicerrectoria-Aprobacion':

            document.getElementById('solicitudPersonal').style.display = 'block';
            document.getElementById('aprobacionCandidato').style.display = 'block';
            
        break;

        case 'RH-Formalizacion-Contratacion':

            document.getElementById('solicitudPersonal').style.display = 'block';
            document.getElementById('aprobacionCandidato').style.display = 'block';
            
        break;
        
        default:

        }

}

function guardarValores() { // Funcion para guardar en session la información capturada en la solicitud.
    
    var numeroSolicitud = document.getElementById('numeroSolicitud').innerHTML;
    var plazaSeleccionada = document.getElementById('tipoPlazaSolicitada').value;
    var numeroNominaOrigen = document.getElementById('numeroNomina').value;
    var nombreEmpleado = document.getElementById('nombreEmpleado').innerHTML;
    var motivoSust = document.getElementById('motivoSustitucion').value;
    var motivoEspecificado = document.getElementById('otroMotivoSustitucion').value;
    
    /*     console.log(" Num Solicitud: " + numeroSolicitud + " Plaza: " + plazaSeleccionada + 
                        " Num Nomina: " + numeroNominaOrigen + " Empleado: " + nombreEmpleado + 
                        " Motivo Seleccionado: " + motivoSust + " Otro motivo: " + motivoEspecificado); */


    window.sessionStorage.setItem('NumSolicitud', numeroSolicitud);
    window.sessionStorage.setItem('Plaza', plazaSeleccionada);
    window.sessionStorage.setItem('NumNomina', numeroNominaOrigen); /* Persona */
    window.sessionStorage.setItem('NomEmpleado', nombreEmpleado); /* NumeroEmpleado */
    window.sessionStorage.setItem('Motivo', motivoSust);
    window.sessionStorage.setItem('MotivoEspecificado', motivoEspecificado);

}

function guardarMotivosRechazo() { // Función para guardar en una variable de sesión los motivos por los que se rechaza la solicitud.

    var motivosRechazoCapturados = document.getElementById('motivoRechazo').value;

    window.sessionStorage.setItem('motivosRechazo', motivosRechazoCapturados);
}

function validarCamposRequeridos() { // Función para mostrar u ocultar los campos requeridos en caso de Sustitución o Suplencia.

    var plaza = document.getElementById('tipoPlazaSolicitada').value;
    
    if (plaza === 'Sustitución' || plaza === 'Suplencia') {

        document.getElementById('lblSustituye').style.display = 'block';
        document.getElementById('numeroNomina').style.display = 'block';
        document.getElementById('lblMotivo').style.display = 'block';
        document.getElementById('motivoSustitucion').style.display = 'block';
        document.getElementById('nombreEmpleado').style.display = 'block';

    } else if (plaza === 'Nueva Creación' || plaza === 'Temporal') {

        document.getElementById('lblSustituye').style.display = 'none';
        document.getElementById('numeroNomina').style.display = 'none';
        document.getElementById('lblMotivo').style.display = 'none';
        document.getElementById('motivoSustitucion').style.display = 'none';

    }

}

function mostrarInformacionSolicitud() { // Función para guardar en sesión la información de la persona la que se sustituye

    document.getElementById('numeroSolicitud').innerHTML = window.sessionStorage.getItem('NumSolicitud');
    document.getElementById('Plaza').innerHTML = window.sessionStorage.getItem('Plaza');
    document.getElementById('datoSustituye').innerHTML = window.sessionStorage.getItem('NumNomina');
    document.getElementById('nombreEmpleado').innerHTML = window.sessionStorage.getItem('NumeroEmpleado');
    
    if(window.sessionStorage.getItem('Motivo') === 'Otro (Especifique)'){

        document.getElementById('datoMotivo').innerHTML = window.sessionStorage.getItem('MotivoEspecificado');

    } else {

        document.getElementById('datoMotivo').innerHTML = window.sessionStorage.getItem('Motivo');

    }
        
}

function mostrarMotivosRechazo(estatusAprobacion) { // Función para mostrar el control para los motivos de rechazo. // parametro: estatusAprobacion

    document.getElementById('motivoRechazo').innerHTML = window.sessionStorage.getItem('motivosRechazo');

    var guardarMotivoRechazo = document.getElementById('motivoRechazo').value;

    if(estatusAprobacion === 'Aprobar') {

        document.getElementById('motivoRechazo').style.visibility = 'hidden';
        document.getElementById('botonEnviar').style.visibility = 'visible';
        document.getElementById('botonRechazo').style.visibility = 'hidden';
        document.getElementById('motivoRechazoLbl').style.visibility = 'hidden';

    } else {
        
        document.getElementById('motivoRechazoLbl').style.visibility = 'visible';
        document.getElementById('motivoRechazo').style.visibility = 'visible';
        document.getElementById('botonRechazo').style.visibility = 'visible';
        //document.getElementById('botonEnviar').style.visibility = 'hidden';
        /* window.sessionStorage.setItem('MotivoRech', guardarMotivoRechazo); */

       // window.sessionStorage.setItem('motivoRechazo', motivosRechazoCapturados);
    } 
    

}

function guardarInformacion() { // Función para guardar en la sesión la inforamción del candidato.
    var candidatoNombre = document.getElementById('nombreCandidato').value;
    var candidatoEstatus = document.getElementById('estatusCandidato').value;
    var citaCandidato = document.getElementById('fechaCitaCandidato').value;
    var rfcCandidato = document.getElementById('rfcCandidato').value;
    var correoCandidato = document.getElementById('correoElectronico').value;

    window.sessionStorage.setItem('Candidato', candidatoNombre);
    window.sessionStorage.setItem('Estatus', candidatoEstatus);
    window.sessionStorage.setItem('Cita', citaCandidato);
    window.sessionStorage.setItem('RFC', rfcCandidato);
    window.sessionStorage.setItem('emailCandidato', correoCandidato);
    
}

function agregarCandidatos() { // Función para agregar la información del candidato a la tabla de Registro.

    var table = document.getElementById('tablaCandidatos');
    var row = table.insertRow(-1);
    var celda1 = row.insertCell(0); 
    var celda2 = row.insertCell(1);
    var celda3 = row.insertCell(2);
    var celda4 = row.insertCell(3);
    var celda5 = row.insertCell(4);

    celda1.innerHTML = window.sessionStorage.getItem('Candidato');
    celda2.innerHTML = window.sessionStorage.getItem('Estatus'); 
    celda3.innerHTML = window.sessionStorage.getItem('Cita');
    celda4.innerHTML = window.sessionStorage.getItem('RFC');
    celda5.innerHTML = window.sessionStorage.getItem('emailCandidato');

}

function generarNumeroAleatorio() { // Funcion para generar un numero aleatorio de 6 posiciones.
	
    var numSolicitud = document.getElementById('numeroSolicitud');
    
    numSolicitud.value = (numSolicitud.innerHTML = Math.floor((Math.random() * 1000000 + 1)));
    
    window.sessionStorage.setItem("NumeroSolicitud", numSolicitud.innerHTML);
   
}

function pausarEnvioForma() { // Fucnión para pausar el envío de la solicitud, permite mostrar un mensaje en pantalla previo al envio.
    
    guardarValores();

    document.getElementById('msjSolicitudEnviada').style.display = 'block';
    
    setTimeout(function() {

        direccionamientoPaginasAplicacion();

    }, 5000);

}

function especificarMotivo() { // Función para mostrar un campo en la forma para la captura otro motivo diferente a los que aparecen en el catalogo.

    var especificarMotivo = document.getElementById('motivoSustitucion').value;

    if (especificarMotivo === 'Otro (Especifique)') {
        document.getElementById('lblMotivoEspecificado').style.display = 'block';
        document.getElementById('otroMotivoSustitucion').style.display = 'block';
       // document.getElementById('especificacionMotivo').style.display = 'block';
    } 
    //console.log(especificarMotivo);

}

function actualizar() { // Función para limpiar y actualizar los valores de los campos: Motivo, Plaza y Persona.

    window.sessionStorage.setItem('Motivo', '');
    window.sessionStorage.setItem('Plaza', '');
    window.sessionStorage.setItem('NumNomina', '');
    window.sessionStorage.setItem('NomEmpleado', '');


    document.getElementById('Plaza').style.display = 'none';
    document.getElementById('datoSustituye').style.display = 'none';
    document.getElementById('datoMotivo').style.display = 'none';
    document.getElementById('nombreEmpleado').style.display = 'none';
    

    document.getElementById('tipoPlazaSolicitada').style.display = 'block';
    document.getElementById('personaSustituida').style.display = 'block';
    document.getElementById('motivoSustitucion').style.display = 'block';
    document.getElementById('empleadoSustituido').style.display = 'block';

}

function simulacionInformacion(numeroEmpleado) {  // Función para simular la búsqueda de un empleado con base a su número de nómina.
    
    let empleados = ["Nombre Empleado Uno", "Nombre Empleado Dos", "Nombre Empleado Tres"];

    document.getElementById('lblNombreEmpleado').style.display = 'block';
    document.getElementById('nombreEmpleado').style.display = 'block';

    switch (numeroEmpleado) {

        case '10100':
            document.getElementById('nombreEmpleado').innerHTML = empleados[0];
        break;

        case '10110':
            document.getElementById('nombreEmpleado').innerHTML = empleados[1];
        break;

        case '10111':
            document.getElementById('nombreEmpleado').innerHTML = empleados[2];
        break;

        default:
            document.getElementById('nombreEmpleado').innerHTML = "El número de empleado no existe, por favor intente nuevamente";
            console.log("no hay datos que corresondan a la consulta");
    }
    
}
