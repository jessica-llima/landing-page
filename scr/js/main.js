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

    // Tipo selector: controlar visibilidade de Pessoa/Empresa
    const tipoSelect = document.getElementById('tipo-select');
    const cardPessoa = document.getElementById('card-pessoa');
    const cardEmpresa = document.getElementById('card-empresa');

    function updateVisibility(value){
        if(!cardPessoa || !cardEmpresa) return;
        if(value === 'pessoa'){
            cardPessoa.style.display = '';
            cardEmpresa.style.display = 'none';
        } else if(value === 'empresa'){
            cardPessoa.style.display = 'none';
            cardEmpresa.style.display = '';
        } else { // ambos
            cardPessoa.style.display = '';
            cardEmpresa.style.display = '';
        }
    }

    if(tipoSelect){
        // Inicializa com o valor atual
        updateVisibility(tipoSelect.value || 'ambos');
        tipoSelect.addEventListener('change', (e) => updateVisibility(e.target.value));
    }
}

document.addEventListener('DOMContentLoaded', initEventListeners);
