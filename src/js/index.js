/*

OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista
- passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
- passo 2 - dar um jeito de identificar o clique do ususario na seta avançar 
- passo 3 - fazer aparecer o proximo cartao da lista 
- passo 4 - buscar o cartao que esta selecionado e esconder 

OBJETIVO 2 quando clicarmos na seta voltar temos que mostrar o cartao anterios da lista 
- passo 1 - dar um jeito de pegar o elemento HTML da seta e voltar 
- passo 2 - dar um jeito de identificar o clique do usuario na seta voltar
- passo 3 - fazer aparecer o cartao anterior da lista 
- passo 4 - buscar cartao que esta selecionado e esconder

*/

// OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista

// - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');

//- passo 2 - dar um jeito de identificar o clique do ususario na seta avançar 
btnAvancar.addEventListener('click', function () {
    if (cartaoAtual === cartoes.length - 1) return;

    //- passo 4 - buscar o cartao que esta selecionado e esconder 
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');


    //- passo 3 - fazer aparecer o proximo cartao da lista, colocando cartao selecionado nele

    cartaoAtual++;

    cartoes[cartaoAtual].classList.add('selecionado');
});

// OBJETIVO 2 quando clicarmos na seta voltar temos que mostrar o cartao anterios da lista

//- passo 1 - dar um jeito de pegar o elemento HTML da seta e voltar

btnVoltar.addEventListener('click', function () {
    if(cartaoAtual === 0 ) return
    
    //- passo 4 - buscar o cartao que esta selecionado e esconder 
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');


    //- passo 3 - fazer aparecer o proximo cartao da lista, colocando cartao selecionado nele

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add('selecionado');
});

