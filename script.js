let input = document.querySelector('#inputTarefa');
let btnAdd = document.querySelector('#btnAdd');
let main = document.querySelector('#areaLista');
let contador = 0;

function addTarefa() {
    let valor = input.value;
    let valorInput = valor[0].toUpperCase() + (valor.substring(1)).toLowCase;

    if ((valorInput !=="") && (valorInput !==null) && (valorInput !==undefined)) {

        ++contador;
        
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button class="delete" onclick="deletar(${contador})">
                <i class="mdi mdi-delete">Delete</i>
            </button>
        </div>
    </div>`;

        main.innerHTML += novoItem; 

        input.value = "";
        input.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe=="item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_'+ id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);

    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_'+id);
        icone.classList.add('mdi-circle-outline');
        icone.classList.remove('mdi-check-circle');
    }
}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTarefa();
    }
});