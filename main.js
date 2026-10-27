const nomes = ["Pablo Castro"]

const lista = document.getElementById("lista");
const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");

function mostrarNomes (){
    lista.innerHTML = "";
    for (let nome of nomes) {
        lista.innerHTML += `<li>${nome}</li>`;
    }

}

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    let nome = campoNome.value;
    if (nome){
        nomes.push(nome);
        mostrarNomes();
        campoNome.value = "";
    }
});

mostrarNomes();