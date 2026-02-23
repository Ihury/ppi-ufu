const campoInteresse = document.getElementById("interesse");
const botaoAdicionar = document.getElementById("btn-adicionar");
const botaoRemover = document.getElementById("btn-remover");
const listaInteresses = document.getElementById("lista-interesses");
const mensagem = document.getElementById("mensagem");

function obterInteresseDigitado() {
    return campoInteresse.value.trim();
}

botaoAdicionar.addEventListener("click", function () {
    // Le o texto digitado no campo de formulario.
    const texto = obterInteresseDigitado();

    // Se o campo estiver vazio, informa o usuario e encerra a operacao.
    if (texto === "") {
        mensagem.textContent = "Digite um interesse antes de adicionar.";
        campoInteresse.focus();
        return;
    }

    // Cria dinamicamente um novo item e adiciona no final da lista ordenada.
    const item = document.createElement("li");
    item.textContent = texto;
    listaInteresses.appendChild(item);

    // Limpa o campo e atualiza a mensagem de retorno.
    campoInteresse.value = "";
    mensagem.textContent = "Interesse adicionado com sucesso.";
    campoInteresse.focus();
});

botaoRemover.addEventListener("click", function () {
    // Le o texto para localizar qual item da lista deve ser removido.
    const texto = obterInteresseDigitado();

    // Se o campo estiver vazio, informa o usuario e interrompe a busca.
    if (texto === "") {
        mensagem.textContent = "Digite um interesse para remover.";
        campoInteresse.focus();
        return;
    }

    // Procura o primeiro item da lista que tenha exatamente o texto digitado.
    const itemParaRemover = Array.from(listaInteresses.children).find(function (item) {
        return item.textContent.toLowerCase() === texto.toLowerCase();
    });

    // Remove o item encontrado da lista; se nao encontrar, exibe aviso.
    if (itemParaRemover) {
        listaInteresses.removeChild(itemParaRemover);
        mensagem.textContent = "Interesse removido com sucesso.";
    } else {
        mensagem.textContent = "Interesse nao encontrado na lista.";
    }

    campoInteresse.value = "";
    campoInteresse.focus();
});
