// Cards Display - Interatividade
document.addEventListener('DOMContentLoaded', () => {
    const cardButtons = document.querySelectorAll('.card-button');
    const cardDisplays = document.querySelectorAll('.card-display');

    // Evento de clique nos botões de card
    cardButtons.forEach(button => {
        button.addEventListener('click', () => {
            const cardType = button.getAttribute('data-card');
            showCard(cardType);
        });
    });

    // Função para mostrar card
    function showCard(cardType) {
        // Esconde todos os displays
        cardDisplays.forEach(display => {
            display.classList.add('hidden');
        });

        // Mostra o card selecionado
        const selectedDisplay = document.getElementById(`display-${cardType}`);
        if (selectedDisplay) {
            selectedDisplay.classList.remove('hidden');
            // Scroll suave para o card
            selectedDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Verificar se há parâmetro de URL para abrir um card automaticamente
    const urlParams = new URLSearchParams(window.location.search);
    const autoOpenCard = urlParams.get('type');
    if (autoOpenCard) {
        showCard(autoOpenCard);
    }
});

// Função para voltar
function goBack() {
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Oculta todos os displays
    const cardDisplays = document.querySelectorAll('.card-display');
    cardDisplays.forEach(display => {
        display.classList.add('hidden');
    });

    // Destaca a área de seleção
    const selectionArea = document.querySelector('.cards-selection');
    if (selectionArea) {
        selectionArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
