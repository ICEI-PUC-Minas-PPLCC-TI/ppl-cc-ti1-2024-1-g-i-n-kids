function init() {
    let formularioContatos = document.querySelector('form');
    let btnCadastrarContatos = document.getElementById('btnCadastrarContato');

    btnCadastrarContatos.addEventListener('click', (e) => {
        let campoNome = document.getElementById('nome').value;
        let campoEmail = document.getElementById('email').value;
        let campoMensagem = document.getElementById('mensagem').value;

        e.preventDefault();

        if (!formularioContatos.checkValidity()) {
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
            nome_usuario: campoNome,
            email: campoEmail,
            mensagem: campoMensagem,
        };

        createContact(contatos);

        formularioContatos.reset();
    });
}
