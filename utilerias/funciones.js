var semestre = ['Primavera', 'Verano', 'Otoño'];
var anio = ["1946", "1947", "1948", "1949", "1950"];
var nombreSemestre;

for (var j = 0; j < anio.length; j ++) {

    for(var i = 0; i < semestre.length ; i++){
    
    nombreSemestre = anio[j] + "-" + semestre[i];
    
    console.log(nombreSemestre);
    }
    
}
