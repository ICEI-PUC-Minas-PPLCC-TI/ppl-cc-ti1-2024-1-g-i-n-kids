let db = [];

readUsers((data) => {
    db = data;
    verificarUsuario();
});

function verificarUsuario() {
    let formularioLogin = document.querySelector('form');
    let botaoLogin = document.getElementById('botao-login');

    botaoLogin.addEventListener('click', (e) => {
        let campoEmail = document.getElementById('email').value;
        let campoSenha = document.getElementById('password').value;

        e.preventDefault();

        if (!formularioLogin.checkValidity()) {
            displayMessage('Preencha o formulário corretamente.', 'warning');
            return;
        }

        const usuarioEncontrado = db.find(
            (usuario) =>
                usuario.email === campoEmail && usuario.senha === campoSenha
        );

        if (usuarioEncontrado) {
            localStorage.setItem('userId', usuarioEncontrado.id);
            window.location.replace('./editar-informacoes.html');
        } else {
            displayMessage('Email ou senha incorretos.', 'danger');
        }
    });
}
