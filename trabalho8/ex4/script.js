const formulario = document.getElementById("form-cadastro");
const mensagemSucesso = document.getElementById("mensagem-sucesso");

const camposObrigatorios = [
    { campoId: "nome", erroId: "erro-nome" },
    { campoId: "email", erroId: "erro-email" },
    { campoId: "data-nascimento", erroId: "erro-data-nascimento" },
    { campoId: "telefone", erroId: "erro-telefone" },
    { campoId: "usuario", erroId: "erro-usuario" },
    { campoId: "senha", erroId: "erro-senha" }
];

formulario.addEventListener("submit", function (evento) {
    // Impede o envio automatico para podermos validar todos os campos no JavaScript.
    evento.preventDefault();

    // Variavel de controle para descobrir se algum campo obrigatorio ficou em branco.
    let formularioValido = true;

    camposObrigatorios.forEach(function (item) {
        const campo = document.getElementById(item.campoId);
        const erro = document.getElementById(item.erroId);

        // Se o valor estiver vazio, mostra a mensagem ao lado do campo.
        if (campo.value.trim() === "") {
            erro.textContent = "Campo obrigatorio.";
            formularioValido = false;
            return;
        }

        // Se o campo estiver preenchido, remove qualquer mensagem de erro anterior.
        erro.textContent = "";
    });

    // Com todos os campos validos, exibe retorno e limpa o formulario.
    if (formularioValido) {
        mensagemSucesso.textContent = "Cadastro enviado com sucesso.";
        formulario.reset();
        return;
    }

    mensagemSucesso.textContent = "";
});
