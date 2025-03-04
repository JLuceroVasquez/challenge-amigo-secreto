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
        // Verificamos que el nombre del amigo sea diferente
        if (listaAmigos.includes(amigoUsuario)){
            // Mostramos un mensaje de alerta
            alert('Por favor, ingrese nombres diferentes.');
        }
        else {
            // En caso el texto no esté vacío, añadir al array amigos
            listaAmigos.push(amigoUsuario);
        }
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
            let elementoLista = document.createElement('li');
            elementoLista.textContent = listaAmigos[i];
            // Agregar el <li> al <ul>
            listaAmigosMostrada.appendChild(elementoLista);
    }
    return;
}
// Función para sortear amigos
function sortearAmigo() {
    // Validamos que haya cuanto menos 2 amigos para sortear
    if (listaAmigos.length<2) {
        // Mensaje de alerta en caso haya menos de 2 amigos que sortear
        alert('Por favor, ingrese al menos dos amigos');
        return;
    } else {
        // Flujo si se sortearon todos los nombres
        if (listaAmigos.length==listaAmigosSorteados.length){
            // Mostrar un mensaje de alerta
            alert('Se sortearon todos los amigos. Ingrese más amigos para sortear.');
            return;
        } 
        // Flujo si quedan nombres por sortear
        else { 
            // Declaramos la variable indiceAmigoSorteado
            let nombreAmigoSorteado = '';

            // Generamos un índice aleatorio que seleccione un nombre no incluido en la lista de amigos sorteados empleando un bucle while
            do{
                // Generar el índice aleatorio
                let indiceAmigoSorteado = Math.floor(Math.random()*listaAmigos.length);
                // Obtener el nombre sorteado
                nombreAmigoSorteado = listaAmigos[indiceAmigoSorteado];
            } while (listaAmigosSorteados.includes(nombreAmigoSorteado)); // Verificar si se encuentra en la lista de amigos sorteados
            
            // Añadir el nombre a la lista de sorteados
            listaAmigosSorteados.push(nombreAmigoSorteado);

            // Mostrar la lista con los resultado del sorteo
            // Declaramos la lista del sorteo
            let listaSorteoMostrada = document.querySelector('#resultado');
            // Limpiamos la lista del sorteo
            asignarTextoElemento('#resultado','');
            // Agregar elementos a la lista
            for(let i=0; i<listaAmigosSorteados.length; i++){
                    // Crear un nuevo elemento <li>
                    let elementoLista = document.createElement('li');
                    elementoLista.textContent = `El amigo sorteado es ${listaAmigosSorteados[i]}`;
                    // Agregar el <li> al <ul>
                    listaSorteoMostrada.appendChild(elementoLista);
            }
        }
    }
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