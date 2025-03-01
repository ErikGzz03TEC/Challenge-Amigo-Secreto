// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
listaAmigos = [];

function añadirLista(nombre) {
    if (listaAmigos.includes(nombre)) {
        alert('El amigo ya está en la lista.');
        return
    }
    let lista = document.getElementById('listaAmigos');
    listaAmigos.push(nombre);
    let nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombre;
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
        alert('Debes tener al menos UN amigos para sortear.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="sorteado"> El amigo sorteado es: "${amigoSorteado}" ¡Felicidades! </li>`;
}