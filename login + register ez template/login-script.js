let idiomaActual = 'es';

function cambiarIdioma(idioma) {
    idiomaActual = idioma;
    actualizarTraducciones();
    console.log("Idioma cambiado a: " + idioma);
}

function mostrarNotificacion(mensaje, exito) {
    var notificacion = document.getElementById('notificacion');
    notificacion.textContent = mensaje;

    notificacion.className = exito ? 'correcto mostrar' : 'incorrecto mostrar';

    setTimeout(function() {
        notificacion.classList.remove('mostrar');

        if (exito) {
            window.location.href = 'dashboard.html';
        }
    }, 5000);
}

function actualizarTraducciones() {
    const traducciones = {
        es: {
            tituloIniciarSesion: "Iniciar Sesión",
            nombreUsuario: "Nombre de Usuario",
            contrasena: "Contraseña",
            notificacionExitosa: "Inicio de sesión exitoso",
            notificacionIncorrecta: "Inicio de sesión incorrecto",
            notificacionCampos: "Por favor, completa todos los campos."
        },
        pt: {
            tituloIniciarSesion: "Iniciar sessão",
            nombreUsuario: "Nome de usuário",
            contrasena: "Senha",
            notificacionExitosa: "Login bem-sucedido",
            notificacionIncorrecta: "Login incorreto",
            notificacionCampos: "Por favor, preencha todos os campos."
        },
        en: {
            tituloIniciarSesion: "Login",
            nombreUsuario: "Username",
            contrasena: "Password",
            notificacionExitosa: "Successful login",
            notificacionIncorrecta: "Incorrect login",
            notificacionCampos: "Please complete all fields."
        }
    };

    document.getElementById('titulo-iniciar-sesion').innerText = traducciones[idiomaActual].tituloIniciarSesion;
    document.getElementById('nombre').setAttribute('placeholder', traducciones[idiomaActual].nombreUsuario);
    document.getElementById('contrasena').setAttribute('placeholder', traducciones[idiomaActual].contrasena);
    document.getElementById('botonIniciarSesion').innerText = traducciones[idiomaActual].tituloIniciarSesion;
}

function iniciarSesion() {
    var nombre = document.getElementById('nombre').value;
    var contrasena = document.getElementById('contrasena').value;

    var registros = JSON.parse(localStorage.getItem('registros')) || [];

    if (nombre && contrasena) {
        var credencialesCorrectas = registros.some(function(usuario) {
            return usuario.nombre === nombre && usuario.contrasena === contrasena;
        });

        if (credencialesCorrectas) {
            localStorage.setItem('usuarioActual', nombre);
            mostrarNotificacion('Inicio de sesión exitoso', true);
        } else {
            mostrarNotificacion('Inicio de sesión incorrecto', false);
        }
    } else {
        mostrarNotificacion('Por favor, completa todos los campos.', false);
    }
}

// Llamada para cargar las traducciones
actualizarTraducciones();
