let pontos = 0;

function adicionarPontos() {
    pontos = pontos + 10;
    atualizarPontuacao();
}

function removerPontos() {
    pontos = pontos - 5;
    atualizarPontuacao();
}

function atualizarPontuacao() {
    document.getElementById("pontos").innerText = pontos + " XP";
}