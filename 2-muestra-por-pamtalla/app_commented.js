

// Datos de muestra para las alertas
const alerts = [
    {"id": 1, "type": "Malware", "severity": "High"},
    {"id": 2, "type": "Phishing", "severity": "Medium"},
    {"id": 3, "type": "DDoS", "severity": "Low"}
];

// Función para mostrar alertas en la página
function displayAlerts() {
    // Obteniendo el contenedor donde se mostrarán las alertas
    const container = document.getElementById('alerts-container');
    // Iterando sobre el array de alertas y creando contenido HTML
    container.innerHTML = alerts.map(alert => 
        `<div class="alert">
            Tipo: ${alert.type}, Severidad: ${alert.severity}
        </div>`
    ).join(''); // Uniendo todas las cadenas HTML en una
}

// Escuchador de eventos para asegurar que el DOM esté completamente cargado antes de ejecutar los scripts
document.addEventListener('DOMContentLoaded', displayAlerts);