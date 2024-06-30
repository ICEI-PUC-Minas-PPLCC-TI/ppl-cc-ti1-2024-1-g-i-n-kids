function init() {
    let formularioContato = document.querySelector('form');

    formularioContato.addEventListener('submit', (e) => {
        e.preventDefault();

        let campoNome = document.getElementById('nome').value;
        let campoEmail = document.getElementById('email').value;
        let campoMensagem = document.getElementById('mensagem').value;

        if (!formularioContato.checkValidity()) {
            displayMessage('Preencha o formulário corretamente.', 'warning');
            return;
        }

        if (campoNome.trim().length < 10) {
            displayMessage(
                'O nome deve ter pelo menos 10 caracteres.',
                'warning'
            );
            return;
        }

        if (campoMensagem.trim().length < 50) {
            displayMessage(
                'O texto da postagem deve ter pelo menos 50 caracteres.',
                'warning'
            );
            return;
        }

        let contatos = {
            username: campoNome,
            email: campoEmail,
            message: campoMensagem,
        };

        createContact(contatos);

        enviarEmailConfirmacaoContato(campoEmail, campoNome, campoMensagem);
    });
}
