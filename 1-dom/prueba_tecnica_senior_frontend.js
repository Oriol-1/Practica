// Función de filtrado
function filtrarPorCriterio(array, criterio) {
    return array.filter(objeto => {
        return Object.keys(criterio).every(key => objeto[key] === criterio[key]);
    });
}

// Función para mostrar datos de filtrado en HTML
function mostrarFiltradoEnHTML(data) {
    const contenedorFiltrado = document.getElementById('filtrado');
    contenedorFiltrado.innerHTML = '<h2>Resultados del Filtrado:</h2>';

    data.forEach(item => {
        const elemento = document.createElement('p');
        elemento.textContent = JSON.stringify(item);
        contenedorFiltrado.appendChild(elemento);
    });
}

// Ejemplo de uso de la función de filtrado
const usuarios = [
    { nombre: 'Alice', edad: 30, ocupacion: 'desarrollador' },
    { nombre: 'Bob', edad: 25, ocupacion: 'diseñador' },
    { nombre: 'Charlie', edad: 35, ocupacion: 'desarrollador' }
];

// Mostrar resultados de filtrado en HTML
mostrarFiltradoEnHTML(filtrarPorCriterio(usuarios, { edad: 30 }));

// Integración con un API de terceros
async function obtenerDatosAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        mostrarDatosEnHTML(data); // Función para mostrar los datos de la API
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

// Función para mostrar datos de la API en HTML
function mostrarDatosEnHTML(data) {
    const contenedorAPI = document.getElementById('datos-api');
    contenedorAPI.innerHTML = '<h2>Datos de la API:</h2>';

    data.forEach((item, index) => {
        if (index < 10) { // Limitar a 10 resultados para simplificar
            const elemento = document.createElement('p');
            elemento.textContent = JSON.stringify(item);
            contenedorAPI.appendChild(elemento);
        }
    });
}

obtenerDatosAPI();
