// Variables globales para traducciones
let idiomaActual = 'es';

// Función para cambiar el idioma
function cambiarIdioma(idioma) {
    idiomaActual = idioma;
    actualizarTraducciones();
    console.log("Idioma cambiado a: " + idioma);
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, exito) {
    var notificacion = document.getElementById('notificacion');
    notificacion.textContent = mensaje;

    // Aplicar color y animación según el resultado del inicio de sesión
    notificacion.className = exito ? 'correcto mostrar' : 'incorrecto mostrar';

    // Limpiar la notificación después de 5 segundos (ajustable)
    setTimeout(function() {
        notificacion.classList.remove('mostrar');
    }, 5000);
}

// Función para actualizar traducciones
function actualizarTraducciones() {
    const traducciones = {
        es: {
            tituloRegistro: "Registro",
            labelNombre: "Nombre de Usuario:",
            labelContrasena: "Contraseña",
            botonRegistro: "Registrar",
            notificacionExitosa: "Registro exitoso",
            notificacionIncorrecta: "Error en el registro",
            notificacionCampos: "Por favor, completa todos los campos.",
            irAInicioSesion: "Ir a Inicio de Sesión"
        },
        pt: {
            tituloRegistro: "Registro",
            labelNombre: "Nome de usuário:",
            labelContrasena: "Senha",
            botonRegistro: "Registrar",
            notificacionExitosa: "Registro bem-sucedido",
            notificacionIncorrecta: "Erro no registro",
            notificacionCampos: "Por favor, preencha todos os campos.",
            irAInicioSesion: "Ir para Login"
        },
        en: {
            tituloRegistro: "Registration",
            labelNombre: "Username:",
            labelContrasena: "Password",
            botonRegistro: "Register",
            notificacionExitosa: "Successful registration",
            notificacionIncorrecta: "Error in registration",
            notificacionCampos: "Please complete all fields.",
            irAInicioSesion: "Go to Login"
        }
    };

    document.getElementById('titulo-registro').innerText = traducciones[idiomaActual].tituloRegistro;
    document.getElementById('label-nombre').innerText = traducciones[idiomaActual].labelNombre;
    document.getElementById('label-contrasena').innerText = traducciones[idiomaActual].labelContrasena;
    document.getElementById('botonRegistro').innerText = traducciones[idiomaActual].botonRegistro;
    document.getElementById('botonIrInicioSesion').innerText = traducciones[idiomaActual].irAInicioSesion;
}

// Función para registrar usuario
function registrarUsuario() {
    var nombre = document.getElementById('nombre').value;
    var contrasena = document.getElementById('contrasena').value;

    // Verificar si hay datos almacenados en el localStorage
    var registros = JSON.parse(localStorage.getItem('registros')) || [];

    // Validación simple
    if (nombre && contrasena) {
        // Verificar si el nombre de usuario ya está registrado
        var usuarioExistente = registros.some(function(usuario) {
            return usuario.nombre === nombre;
        });

        if (!usuarioExistente) {
            // Registrar nuevo usuario
            registros.push({ nombre: nombre, contrasena: contrasena });
            localStorage.setItem('registros', JSON.stringify(registros));
            mostrarNotificacion('Registro exitoso', true);
        } else {
            mostrarNotificacion('El nombre de usuario ya existe', false);
        }
    } else {
        mostrarNotificacion('Por favor, completa todos los campos.', false);
    }
}

// Función para ir a la página de inicio de sesión
function irAInicioSesion() {
    window.location.href = "login.html"; // Ajusta la ruta según tu estructura de archivos
}

// Llamada inicial para cargar las traducciones
actualizarTraducciones();
