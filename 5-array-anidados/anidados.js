
//  Para crear una función en JavaScript que acepte cualquier número de arrays anidados y devuelva un array plano, puedes utilizar la recursión.

function flattenArrayy(arr) {
    let result = [];

    // Función para aplanar cada elemento
    arr.forEach(element => {
        if (Array.isArray(element)) {
            // Si el elemento es un array, aplánalo recursivamente
            result = result.concat(flattenArray(element));
        } else {
            // Si no es un array, añádelo al resultado
            result.push(element);
        }
    });

    return result;
}

//////////////////////////////////////////////////////////

function flattenArray(arr){
    return arr.flat(Infinity)
}


// Ejemplo de uso
const nestedArray = [1, [2, [3, 4], [[5]]], 6];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); // Salida: [1, 2, 3, 4, 5, 6]