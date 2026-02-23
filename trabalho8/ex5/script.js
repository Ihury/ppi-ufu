const subtitulos = document.querySelectorAll("section h2");

subtitulos.forEach(function (subtitulo) {
    subtitulo.addEventListener("click", function () {
        const conteudo = subtitulo.nextElementSibling;

        if (conteudo) {
            conteudo.classList.add("oculto");
        }
    });

    subtitulo.addEventListener("dblclick", function () {
        const conteudo = subtitulo.nextElementSibling;

        if (conteudo) {
            conteudo.classList.remove("oculto");
        }
    });
});
