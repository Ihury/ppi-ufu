const imagens = document.querySelectorAll("img");

imagens.forEach(function (imagem) {
    imagem.addEventListener("mouseenter", function () {
        imagem.style.boxShadow = "0 0 14px 5px rgba(220, 0, 0, 0.95)";
    });

    imagem.addEventListener("mouseleave", function () {
        imagem.style.boxShadow = "none";
    });
});
