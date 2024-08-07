document.addEventListener('DOMContentLoaded', () => {
    function createCalendar() {
        const calendar = document.getElementById('calendario');
        const date = new Date();
        const month = date.getMonth();
        const year = date.getFullYear();
        const today = date.getDate();

        // Nomes dos dias da semana
        const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

        // Primeiro dia do mês
        const firstDay = new Date(year, month, 1).getDay();
        // Total de dias no mês
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Cabeçalho do calendário
        let html = '<div class="header">' + (date.toLocaleDateString('pt-BR', { month: 'long' })) + ' ' + year + '</div>';
        html += '<div class="days">';
        // Cabeçalhos dos dias da semana
        daysOfWeek.forEach(day => {
            html += '<div class="day">' + day + '</div>';
        });

        // Espaços em branco para alinhar o primeiro dia
        for (let i = 0; i < firstDay; i++) {
            html += '<div class="day"></div>';
        }

        // Dias do mês
        for (let day = 1; day <= daysInMonth; day++) {
            // Verifica se é o dia atual e adiciona uma classe especial
            const className = day === today ? 'day today' : 'day';
            html += '<div class="' + className + '">' + day + '</div>';
        }

        html += '</div>';
        calendar.innerHTML = html;
    }

    createCalendar();
});

// Função para atualizar a data e hora
function atualizaHoraData() {
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
            <form action="/TelaPrincipal" method="get">
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                </svg>
                </button>
            </form>
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