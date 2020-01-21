function obtenerNombrePagina() {    // Función para obtener el nombre de una página, se eliminan la ruta y la extensión.

    const pathCompleto = window.location.pathname;
    let nombrePagina = pathCompleto.split("/").pop();

        nombrePagina = nombrePagina.substring(0, nombrePagina.length - 5);
    
    return nombrePagina;

}

function fechaHoraIngreso() { // Funcion para mostrar la fecha y hora en la que se abre la página.

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
