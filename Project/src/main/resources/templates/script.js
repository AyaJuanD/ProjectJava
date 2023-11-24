document.addEventListener('DOMContentLoaded', function () {
    cargarUsuarios();
});

function cargarUsuarios() {
    fetch("/usuarios/")
        .then(response => response.json())
        .then(data => {
            // Manipula los datos de la API para mostrarlos en la interfaz de usuario
            mostrarUsuarios(data);
        })
        .catch(error => console.error('Error:', error));
}

function mostrarUsuarios(usuarios) {
    const resultadoApi = document.getElementById('resultado-api');
    resultadoApi.innerHTML = ''; // Limpia el contenido anterior

    usuarios.forEach(usuario => {
        const usuarioDiv = document.createElement('div');
        usuarioDiv.className = 'usuario';
        usuarioDiv.innerHTML = `
            <p>ID: ${usuario.id}</p>
            <p>Nombre: ${usuario.nombre}</p>
            <p>Apellido: ${usuario.apellido}</p>
            <p>Teléfono: ${usuario.telefono || 'No especificado'}</p>
            <p>Dirección: ${usuario.direccion}</p>
            <button onclick="modificarUsuario(${usuario.id})">Modificar</button>
            <button onclick="eliminarUsuario(${usuario.id})">Eliminar</button>
            <hr>
        `;
        resultadoApi.appendChild(usuarioDiv);
    });
}

function guardarUsuario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;

    const usuario = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        direccion: direccion
    };

    fetch('/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
    })
        .then(response => response.json())
        .then(data => {
            // Actualiza la interfaz de usuario después de guardar el usuario
            cargarUsuarios();
        })
        .catch(error => console.error('Error:', error));
}

function modificarUsuario(idUsuario) {
    // Implementa la lógica para modificar un usuario
    // Puedes usar un formulario o un enfoque similar al de guardarUsuario
    console.log('Modificar usuario con ID:', idUsuario);
}

function eliminarUsuario(idUsuario) {
    fetch(`/usuarios/${idUsuario}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (response.ok) {
                // Actualiza la interfaz de usuario después de eliminar el usuario
                cargarUsuarios();
            } else {
                console.error('Error al eliminar el usuario.');
            }
        })
        .catch(error => console.error('Error:', error));
}
