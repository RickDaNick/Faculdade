function atualizaHoraData(){
    const agora = new Date();
    const opcoes = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoes);
    document.getElementById('dataeHora').textContent = dataFormatada;
}
setInterval(atualizaHoraData, 1000);
 atualizaHoraData();

 function atualizarIconeMenu() {
    const iconeMenu = document.getElementById('iconeCasaMenu');
    if (window.innerWidth <= 800) {
        iconeMenu.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        `;
    } else {
        iconeMenu.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
            </svg>
        `;
    }
}

window.addEventListener('resize', atualizarIconeMenu);
window.addEventListener('load', atualizarIconeMenu);

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('iconeCasaMenu');
    const menuLateral = document.getElementById('menuLateral');
    const menuClose = document.getElementById('menuclose');

    const isMobileView = () => window.innerWidth <= 800;

    menuIcon.addEventListener('click', () => {
        if (isMobileView()) {
            menuLateral.style.display = 'flex';
        }
    });

    menuClose.addEventListener('click', () => {
        if (isMobileView()) {
            menuLateral.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 800) {
            menuLateral.style.display = 'none';
        }
    });
});

