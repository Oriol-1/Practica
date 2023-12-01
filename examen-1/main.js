// pregunta 1
// Crea dos arrays anomenats array1 i array2.
// Amb un bucle for, omple al mateix temps, és a dir, en una sola operació, els dos arrays: L'array1 amb els números del 200 al 0 en intervals de 20, i l'array2 els múltiples de 3 de la sèrie anterior.

// Un cop finalitzat el bucle, ordenar els elements de l'array2 de forma ascendent i mostrar-ne el contingut en els paràgrafs amb l'id equivalent del present .html.

// La sortida haurà de ser la següent:

// Array1: 200, 180, 160, 140, 120, 100, 80, 60, 40, 20, 0
// Array2: 60, 120, 180

// Pregunta 2

const array1 = []
const array2 = []

for (i = 200; i >= 0; i--) {
    if (i % 20 === 0) {
        array1.push(i)
        if (i % 3 === 0) {
            array2.push(i)
        }

    }

}

array2.sort((a, b) =>a-b);
array2.shift()
function p1() {
    document.getElementById('array1').innerText = array1
    document.getElementById('array2').innerText = array2
}

    // Busca els dades del gat 'Bombay' guardant el resultat de la cerca en un objecte anomenat puppy.
    // Imprimiu l'objecte puppy a la consola en forma de taula.


    // Busca els dades del gat 'Bombay' guardant el resultat de la cerca en un objecte anomenat puppy.
    // Imprimiu l'objecte puppy a la consola en forma de taula.

function p2b(){
    let puppy = mascotas.find(gato => gato.tipoMascota == "Gatos")
    puppy = puppy.razas.find(raza => raza.raza == "Bombay")

    console.table(puppy) // console.table() muestra los datos en forma de tabla 
}

// find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada. En otro caso devuelve undefined.


// Extreu en un array anomenat gossos, les races de gossos de pèl curt. Mostra el nou array amb un alert.

// Extreu en un array anomenat goss

function p2c() {
    let gossos = mascotas.find(mascota => mascota.tipoMascota == 'Perros')
    gossos = gossos.razas.filter(tramo => tramo.pelo == 'corto')
    // filter()
    // Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
   
    alert(gossos.map(gos => gos.raza))
    // por consola muestrame la raza y el pesokg
    // console.log(gossos.map(gos => gos.raza + ' ' + gos.pesoKg))

    // mostrar por pantalla
    gossos.map(gos => gos.raza)
    document.getElementById('p2c').innerText = gossos.map(gos => gos.raza)

    // map() 
    // Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

}
 function p2e(){
    let tipo = prompt("que sera perro o gato", "gato" );
    let raza = prompt("raza:", "gato-1");
    let origen =prompt("origen;", "gato-2")
    let alturaCm = prompt("altura:", "gato-3")
    let pesoKg = prompt("peso:", "gato-4");
    let pelo = prompt("pelo:", "gato-5");
    let colores = prompt("colores:", "gato-6");
    let caracter = prompt("caracter:", "gato-7");
    let esperanzaVida =prompt("esperanzaVida", "gato-8");
  

    let mascota = new Puppy(raza, origen, alturaCm, pesoKg, pelo, colores, caracter, esperanzaVida, tipo );
    
    console.log(mascota.toString());
     alert(mascota.toString());
 }















