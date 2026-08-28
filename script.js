// Botão para mostrar o projeto

const botaoProjeto = document.getElementById("mostrarProjeto");
const projeto = document.getElementById("projeto");

botaoProjeto.addEventListener("click", function () {

    projeto.classList.toggle("oculto");

    if (projeto.classList.contains("oculto")) {
        botaoProjeto.textContent = "Conheça o projeto";
    } else {
        botaoProjeto.textContent = "Ocultar projeto";
    }

});


// Botão de conclusão

const botaoConclusao = document.getElementById("concluir");
const mensagem = document.getElementById("mensagem");

botaoConclusao.addEventListener("click", function () {

    mensagem.textContent =
        "🎉 Análise concluída! A tecnologia pode ser uma grande parceira da criatividade.";

    botaoConclusao.textContent = "Análise concluída ✓";
});
