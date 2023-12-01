// Solució pregunta 1

const array1 = []
const array2 = []

for (i = 100; i >= 5; i--) {
    if (i % 5 === 0) {
        array1.push(i)
        if (i % 3 === 0) {
            array2.push(i)
        }
    }
}


// El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.

array2.sort((a, b) => {return a-b});

function pregunta1() {
    document.getElementById('array1').innerHTML = array1
    document.getElementById('array2').innerHTML = array2
}



// Resultado pregunta 2b:



   function pregunta2b () {
    for (persona of treballadors) {
        if (persona.nom == 'Pep' && persona.cognom == 'Vila') {
           

            document.getElementById('nom1').innerHTML = persona.nom;
            document.getElementById('cognoms1').innerHTML = persona.cognom;
            document.getElementById('carrec1').innerHTML = persona.carrec;
            document.getElementById('trasllat1').innerHTML = persona.disponibilitatTrasllat;
        }
    }
}

// Resultado pregunta 2c:

function pregunta2c(){

   const personaTreballadors = [];

   for (element of treballadors) {

      if (element.disponibilitatTrasllat === true ){
            
            personaTreballadors.push(element)
      }
   }
   console.log(personaTreballadors)
   
}

// Resultado pregunta 2e:


 function pregunta2e() {
    let treballador1 = new Treballador('Oriol', 'Alonso', 'Developer', true);
 
    document.getElementById('nom2').innerHTML = treballador1.nom;
     document.getElementById('cognoms2').innerHTML = treballador1.cognom;
     document.getElementById('carrec2').innerHTML = treballador1.carrec;
     document.getElementById('trasllat2').innerHTML = treballador1.disponibilitatTrasllat;
 }