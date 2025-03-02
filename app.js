// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function condicionesInciales(){
    listaAmigos = [];
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    lista.innerHTML = '';
    document.getElementById('amigo').disabled = false;
    document.getElementById('agregar').disabled = false;
}

function reiniciarJuego() {
    condicionesInciales();
}   

function añadirLista(nombre) {
    if (listaAmigos.includes(nombre)) {
        alert('El amigo ya está en la lista.');
        return;
    }

    let lista = document.getElementById('listaAmigos');
    listaAmigos.push(nombre);

    let nuevoAmigo = document.createElement('li');
    nuevoAmigo.classList.add('amigo-item');

    let nombreSpan = document.createElement('span');
    nombreSpan.textContent = nombre;

    let botonEliminar = document.createElement('button');
    botonEliminar.innerHTML = 'X';
    botonEliminar.classList.add('eliminar-btn');
    botonEliminar.onclick = function () {
        listaAmigos = listaAmigos.filter(amigo => amigo !== nombre);
        lista.removeChild(nuevoAmigo);
    };

    nuevoAmigo.appendChild(nombreSpan);
    nuevoAmigo.appendChild(botonEliminar);
    lista.appendChild(nuevoAmigo);
}


function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();
    if (nombre) {
        añadirLista(nombre);
        input.value = '';
    }
}

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Debes tener al menos UN amigo para sortear.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="sorteado"> El amigo sorteado es: "${amigoSorteado}" ¡Felicidades! </li>`;

    // Deshabilitar el botón de agregar amigo
    document.getElementById('amigo').disabled = true;
    document.getElementById('agregar').disabled = true;
}

condicionesInciales();
