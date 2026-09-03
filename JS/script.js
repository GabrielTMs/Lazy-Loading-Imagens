

const img = document.querySelectorAll(".seletorImg");

const funcImagem = new IntersectionObserver((interseImg, observador) => {
    
    interseImg.forEach((entrada) => {
        if (!entrada.isIntersecting) return;

        const imagem = entrada.target;
    
        imagem.src = imagem.src.replace("?w=10&", "?w=1100&");

        observador.unobserve(imagem);
    });

}, {});

img.forEach((iimages) => {
    funcImagem.observe(iimages);
});

