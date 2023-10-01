/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover 
a seleção dele 

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover 
a seleção dele 
*/

//pegando os elementos botões no DOM
const botoes = document.querySelectorAll(".botao");

//pegando elementos personagens
const personagens = document.querySelectorAll(".personagem");


//forEach para pegar eventos dos botões
botoes.forEach((botao, indice) => {
  //arrow function para verificar evento de click
  botao.addEventListener("click", () => {

 
    desselecionarBotao();
    desselecionarPersonagem();

    //adicionando classe selecionado para o botão clicado
    botao.classList.add('selecionado');
    //adicionando personagens ao click do botão
    personagens[indice].classList.add("selecionado");
  });
});




function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
  const botaoSeleciondo = document.querySelector(".botao.selecionado");
  //removendo classe se houver
  botaoSeleciondo.classList.remove("selecionado");
}

