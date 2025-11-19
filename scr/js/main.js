// Simple demo handler: prevents default and logs form data as JSON.
function handleSubmit(e, type){
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());
    console.log('submissão:', type, data);
    alert('Dados de ' + type + ' preparados (veja console).');
    // Aqui você integraria com fetch() para enviar ao servidor.
}

function resetFormById(id){
    const f = document.getElementById(id);
    if(f) f.reset();
}

function initEventListeners(){
    // Attach submit handlers to forms with id starting with 'form-'
    document.querySelectorAll('form[id^="form-"]').forEach(form => {
        const type = form.id.replace(/^form-/, '');
        form.addEventListener('submit', (e) => handleSubmit(e, type));
    });

    // Attach reset handlers to buttons with data-reset attribute
    document.querySelectorAll('[data-reset]').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-reset');
            resetFormById(target);
        });
    });

    // Scroll button
    const scrollBtn = document.getElementById('btn-scroll');
    if(scrollBtn){
        scrollBtn.addEventListener('click', () => {
            const main = document.getElementById('main');
            if(main) main.scrollIntoView({behavior: 'smooth'});
        });
    }

    // Tipo selector: controlar visibilidade de Login/Pessoa/Endereço
    const tipoSelect = document.getElementById('tipo-select');
    const cardLogin = document.getElementById('card-login');
    const cardPessoa = document.getElementById('card-pessoa');
    const cardEndereco = document.getElementById('card-endereco');

    function updateVisibility(value){
        // Esconde todos os cards
        if(cardLogin) cardLogin.style.display = 'none';
        if(cardPessoa) cardPessoa.style.display = 'none';
        if(cardEndereco) cardEndereco.style.display = 'none';

        // Mostra apenas o selecionado
        if(value === 'login' && cardLogin){
            cardLogin.style.display = '';
        } else if(value === 'pessoa' && cardPessoa){
            cardPessoa.style.display = '';
        } else if(value === 'endereco' && cardEndereco){
            cardEndereco.style.display = '';
        } else if(value === 'ambos'){
            // Mostra todos os cards
            if(cardLogin) cardLogin.style.display = '';
            if(cardPessoa) cardPessoa.style.display = '';
            if(cardEndereco) cardEndereco.style.display = '';
        }
    }

    if(tipoSelect){
        // Inicializa com o valor atual
        updateVisibility(tipoSelect.value || 'ambos');
        tipoSelect.addEventListener('change', (e) => updateVisibility(e.target.value));
    }

    // Smooth scroll when arriving with a hash (e.g. index.html#card-login)
    function scrollToHashOnLoad(){
        if(window.location && window.location.hash){
            const id = window.location.hash.replace('#','');
            const el = document.getElementById(id);
            if(el){
                // small timeout to allow layout to stabilize
                setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
            }
        }
    }

    // Run once on init
    scrollToHashOnLoad();
}

document.addEventListener('DOMContentLoaded', initEventListeners);
