let seuVotoPara = document.querySelector('.divisao1-1 span');
let cargo = document.querySelector('.divisao1-2 span');
let descricao = document.querySelector('.divisao1-4');
let aviso = document.querySelector('.divisao2');
let lateral = document.querySelector('.divisao1Right');
let numeros = document.querySelector('.divisao1-3');

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for (let i=0;i<etapa.numeros; i++) {
        numeroHtml += '<div class="numero"></div>';
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {

}


function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    if (elNumero !== null) {
        elNumero.innerHTML = n;
        numero = '${numero}${n}';
    }
}

function branco() {
    alert("Clicou em BRANCO!");
}

function corrige() {
    alert("Clicou em CORRIGE!");
}

function confirma() {
    alert("Clicou em CONFIRMA!");
}

comecarEtapa();