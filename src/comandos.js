const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem"); 
const informacoes = document.querySelectorAll(".informacoes");

let indiceImagem = 0;
let intervalo = setInterval(mudarImagem, 5000);

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        clearInterval(intervalo);

        const botaoSelecionado = document.querySelector(".selecionado");
        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");

        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");
        imagens[indice].classList.add("ativa");

        const informacaoAtiva = document.querySelector(".informacoes.ativa");
        informacaoAtiva.classList.remove("ativa");
        informacoes[indice].classList.add("ativa");
    });
});

function mudarImagem() {
    indiceImagem = (indiceImagem + 1) % imagens.length;
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
    imagens[indiceImagem].classList.add("ativa");

    const informacaoAtiva = document.querySelector(".informacoes.ativa");
    informacaoAtiva.classList.remove("ativa");
    informacoes[indiceImagem].classList.add("ativa");

    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
    botoesCarrossel[indiceImagem].classList.add("selecionado");
}
