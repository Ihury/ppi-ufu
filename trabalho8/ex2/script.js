const campoEstado = document.getElementById("estado");
const textoEstado = document.getElementById("estado-escolhido");

campoEstado.addEventListener("change", function () {
    if (campoEstado.value === "") {
        textoEstado.textContent = "Estado selecionado: nenhum.";
        return;
    }

    textoEstado.textContent = "Estado selecionado: " + campoEstado.value + ".";
});
