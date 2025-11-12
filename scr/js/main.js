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

    // Tipo selector: controlar visibilidade de Pessoa/Empresa/Endereço
    const tipoSelect = document.getElementById('tipo-select');
    const cardPessoa = document.getElementById('card-pessoa');
    const cardEmpresa = document.getElementById('card-empresa');
    const cardEndereco = document.getElementById('card-endereco');

    function updateVisibility(value){
        // Esconde todos os cards
        if(cardPessoa) cardPessoa.style.display = 'none';
        if(cardEmpresa) cardEmpresa.style.display = 'none';
        if(cardEndereco) cardEndereco.style.display = 'none';

        // Mostra apenas o selecionado
        if(value === 'pessoa' && cardPessoa){
            cardPessoa.style.display = '';
        } else if(value === 'empresa' && cardEmpresa){
            cardEmpresa.style.display = '';
        } else if(value === 'endereco' && cardEndereco){
            cardEndereco.style.display = '';
        } else if(value === 'ambos'){
            // Mostra pessoa e empresa
            if(cardPessoa) cardPessoa.style.display = '';
            if(cardEmpresa) cardEmpresa.style.display = '';
        }
    }

    if(tipoSelect){
        // Inicializa com o valor atual
        updateVisibility(tipoSelect.value || 'ambos');
        tipoSelect.addEventListener('change', (e) => updateVisibility(e.target.value));
    }
}

document.addEventListener('DOMContentLoaded', initEventListeners);
