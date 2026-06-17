function toggleCard(clickedCard) {
    // PROTEÇÃO DE CLIQUE: Verifica se o clique foi em um link/botão
    const evento = window.event;
    if (evento && evento.target.closest('a')) {
        return; // Interrompe a função aqui para que o link (WhatsApp, Insta) funcione normalmente
    }

    // Fecha todos os cards antes de abrir o novo
    document.querySelectorAll(".card").forEach(card => {
        if (card !== clickedCard) {
            card.classList.remove("flipped");
        }
    });

    // Alterna o estado do card clicado
    clickedCard.classList.toggle("flipped");
}