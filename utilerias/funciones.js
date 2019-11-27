var semestre = ['P', 'V', 'O'];
var nombreSemestre;
var anio = [1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960,
            1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 
            1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 
            1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 
            2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

for (var j = 0; j < anio.length; j ++) {

    for(var i = 0; i < semestre.length ; i++){
    
    nombreSemestre = semestre[i] + "-" + anio[j];
    
    console.log(nombreSemestre);
    }
    
}
Ejemplo salida: 

P-1946
V-1946
O-1946
P-1947
V-1947
O-1947
+ - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - +

function obtenerNombrePagina() {    // Función para obtenr el nombre de la página, se eliminam la ruta y la extensión. 

    let pathCompleto = window.location.pathname;
    let nombrePagina = pathCompleto.split("/").pop();

        nombrePagina = nombrePagina.substring(0, nombrePagina.length - 5);
    
    return nombrePagina;

}
+ - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - +
            
function generarNumeroAleatorio() { // Funcion para generar un numero aleatorio de 6 posiciones.
	
    let numSolicitud = document.getElementById('numeroSolicitud');
    
    numSolicitud.value = (numSolicitud.innerHTML = Math.floor((Math.random() * 1000000 + 1)));
    
    window.sessionStorage.setItem("NumeroSolicitud", numSolicitud.innerHTML);
   
}
+ - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - + + - +
            
function pausarEnvioForma() { // Fucnión para pausar el envío de la solicitud, permite mostrar un mensaje en pantalla previo al envio.
    
    guardarValores();
    
    document.getElementById('msjSolicitudEnviada').style.display = 'block';
    
    setTimeout(function() {

        direccionamientoPaginasAplicacion();

    }, 5000);
    
}
