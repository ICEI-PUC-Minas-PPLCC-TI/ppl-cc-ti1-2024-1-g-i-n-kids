let userId = localStorage.getItem('userId');
let modal = document.getElementById('modal');

if (!userId) {
    alert('Acesso restrito. Por favor, faça login para continuar.');
    window.location.replace('../usuario/login.html');
} else {
    modal.style.opacity = 1;

    function init() {
        let formularioTarefa = document.querySelector('form');
        let btnCadastrarTarefa = document.getElementById('btnSalvarTarefa');

        btnCadastrarTarefa.addEventListener('click', (e) => {
            let tituloTarefa = document.getElementById('tituloTarefa').value;
            let diaDaSemana = document.getElementById('diaDaSemana').value;
            let horaTarefa = document.getElementById('horaTarefa').value;

            e.preventDefault();

            if (!formularioTarefa.checkValidity()) {
                displayMessage(
                    'Preencha o formulário corretamente.',
                    'warning'
                );
                return;
            }

            if (tituloTarefa.trim() < 5) {
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
                userId: userId
            };

            createTask(tarefa);

            formularioTarefa.reset();
        });
    }
}
