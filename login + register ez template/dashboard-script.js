// Variables globales para traducciones y configuraciones
let idiomaActual = 'es';

function cambiarIdioma(idioma) {
    idiomaActual = idioma;
    // Actualiza cualquier contenido que dependa del idioma si es necesario
    console.log("Idioma cambiado a: " + idioma);
}

function mostrarNotificacion(mensaje, exito) {
    alert(mensaje);
}

// Función para obtener el nombre de usuario actual almacenado
function obtenerNombreUsuario() {
    return localStorage.getItem('usuarioActual') || 'Nombre de Usuario';
}

function actualizarNombreUsuario() {
    document.getElementById('nombre-cuenta').innerText = obtenerNombreUsuario();
}

// Llamada para actualizar el nombre de usuario al cargar el dashboard
actualizarNombreUsuario();
