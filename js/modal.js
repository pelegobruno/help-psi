document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const portfolio = document.getElementById("portfolio");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    // MELHORIA UX: Verifica se o usuário já confirmou antes nesta sessão
    if (sessionStorage.getItem("isPsychologist") === "true") {
        modal.style.display = "none";
        portfolio.classList.remove("hidden");
        document.body.style.overflow = "auto";
        return; // Encerra a função aqui, pois já está liberado
    }

    // Se é o primeiro acesso, exibe a modal e oculta o portfólio
    modal.style.display = "flex";
    portfolio.classList.add("hidden");
    document.body.style.overflow = "hidden"; // Bloqueia a rolagem

    // Se clicar em "Sim", libera o acesso e salva a escolha
    yesBtn.addEventListener("click", function () {
        modal.style.display = "none";
        portfolio.classList.remove("hidden");
        document.body.style.overflow = "auto";
        
        // Salva a resposta na sessão atual do navegador
        sessionStorage.setItem("isPsychologist", "true");
    });

    // Se clicar em "Não", redireciona para o Google
    noBtn.addEventListener("click", function () {
        window.location.href = "https://www.google.com";
    });
});