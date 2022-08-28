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

    for(let i=0;i<etapa.numeros;i++) {
        if(i === 0) {
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero) {
            return true;
        } else {
            return false;
        }
    });
    
    console.log("Candidato", candidato);
}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling != null) {
        elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }
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