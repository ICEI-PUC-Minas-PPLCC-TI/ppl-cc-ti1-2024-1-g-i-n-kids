function init() {
    let formularioCadastro = document.querySelector('form');
    let botaoCadastro = document.getElementById('botao-cadastro');

    botaoCadastro.addEventListener('click', (e) => {
        let campoNome = document.getElementById('nome').value;
        let campoTelefone =  document.getElementById('telefone').value;
        let campoEmail = document.getElementById('email').value;
        let campoPassword =  document.getElementById('password').value;
        let campoConfirmPassword =  document.getElementById('confirm-password').value;

        e.preventDefault();

        if (!formularioCadastro.checkValidity()) {
            displayMessage('Preencha o formulário corretamente.', 'warning');
            return;
        }

        if (campoPassword !== campoConfirmPassword) {
            displayMessage('As senhas não se coincidem.', 'warning');
            return;
        }
        
        let usuario = {
            nome: campoNome,
            telefone: campoTelefone,
            email: campoEmail,
            senha: campoPassword
        };

        createUser(usuario);

        formularioCadastro.reset();
    });
}