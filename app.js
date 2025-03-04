// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaramos las variables y arrays
let listaAmigos = [];
let listaAmigosSorteados = [];
// Función para agregar al amigo en la lista
function agregarAmigo() {
    // Capturar el texto escrito por el usuario
    let amigoUsuario = document.querySelector("#amigo").value;
    if(amigoUsuario==''){
        // En caso el texto esté vacío, mostrar un mensaje de alerta
        alert('Por favor, inserte un nombre.');
        return;
    }
    else {
        // En caso el texto no esté vacío, añadir al array amigos
        listaAmigos.push(amigoUsuario);
    }
    // Acualizamos la lista amigos mostrada en la web
    actualizarAmigo();
    // Limpiar la caja de texto y enfocar el cursor en ella
    limpiarCaja();
}
// Función para actualizar la lista de amigos mostrada
function actualizarAmigo() {
    // Obtener el elemento de la lista
    let listaAmigosMostrada = document.querySelector('#listaAmigos');
    // Limpiar la lista existente
    asignarTextoElemento('#listaAmigos','');
    // Iterar sobre el rango
    for(let i=0; i<listaAmigos.length; i++){
        // Agregar elementos a la lista
            // Crear un nuevo elemento <li>
            let lista = document.createElement('li');
            lista.textContent = listaAmigos[i];
            // Agregar el <li> al <ul>
            listaAmigosMostrada.appendChild(lista);
    }
    return;
}
// Función para asignar texto a los elementos del DOM
function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
// Función para limpiar la caja de texto y enfocar el cursor
function limpiarCaja() {
    document.querySelector("#amigo").value='';
    document.querySelector('#amigo').focus();
    return;
}