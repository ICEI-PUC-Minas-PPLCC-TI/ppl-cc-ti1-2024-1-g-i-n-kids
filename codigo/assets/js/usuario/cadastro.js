let db = [];

readUsers(data => {
    db = data;
    init();
});

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

        if (campoNome.trim().length < 10) {
            displayMessage('O nome do usuário deve ter pelo menos 10 caracteres.', 'warning');
            return;
        }

        if (campoTelefone.length !== 15) {
            displayMessage('Insira um número de telefone válido com DDD (formato: (XX) XXXXX-XXXX).', 'warning');
            return;
        }

        if (campoPassword.trim().length < 8) {
            displayMessage('A senha deve conter pelo menos 8 caracteres.', 'warning');
            return;
        }

        if (campoPassword !== campoConfirmPassword) {
            displayMessage('As senhas não se coincidem.', 'warning');
            return;
        }

        const usuarioEncontrado = db.find(user => user.email === campoEmail);

        if (usuarioEncontrado) {
            displayMessage('O e-mail informado já está cadastrado.', 'warning');
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