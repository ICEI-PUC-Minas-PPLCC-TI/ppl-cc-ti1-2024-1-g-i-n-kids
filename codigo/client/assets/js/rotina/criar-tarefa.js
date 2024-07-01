let userId = localStorage.getItem('userId');

if (!userId) {
    Swal.fire({
        title: 'Acesso restrito',
        text: 'Por favor, faça login para continuar.',
        icon: 'warning',
        confirmButtonColor: '#d6bdff',
    }).then(() => {
        window.location.replace('../usuario/login.html');
    });
}

function init() {
    let formularioTarefa = document.querySelector('form');

    formularioTarefa.addEventListener('submit', (e) => {
        e.preventDefault();

        let tituloTarefa = document.getElementById('tituloTarefa').value;
        let diaDaSemana = document.getElementById('diaDaSemana').value;
        let horaTarefa = document.getElementById('horaTarefa').value;

        if (!formularioTarefa.checkValidity()) {
            displayMessage('Preencha o formulário corretamente.', 'warning');
            return;
        }

        if (tituloTarefa.trim().length < 5) {
            displayMessage(
                'O título da tarefa deve ter pelo menos 5 caracteres.',
                'warning'
            );
            return;
        }

        const tarefa = {
            title: tituloTarefa,
            weekDay: diaDaSemana,
            time: horaTarefa,
            userId: userId,
        };

        createTask(tarefa);

        formularioTarefa.reset();
    });
}
