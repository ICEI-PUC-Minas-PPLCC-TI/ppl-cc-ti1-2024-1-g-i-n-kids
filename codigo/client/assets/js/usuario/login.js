let userId = localStorage.getItem('userId');

if (userId) {
    window.location.replace('./editar-informacoes.html');
}

let db = [];

findAllUsers((data) => {
    db = data;
    verificarUsuario();
});

function verificarUsuario() {
    let formularioLogin = document.querySelector('form');

    formularioLogin.addEventListener('submit', (e) => {
        e.preventDefault();

        let campoEmail = document.getElementById('email').value;
        let campoSenha = document.getElementById('password').value;

        if (!formularioLogin.checkValidity()) {
            displayMessage('Preencha o formulário corretamente.', 'warning');
            return;
        }

        const usuarioEncontrado = db.find(
            (usuario) =>
                usuario.email === campoEmail &&
                usuario.password === CryptoJS.SHA256(campoSenha).toString()
        );

        if (usuarioEncontrado) {
            localStorage.setItem('userId', usuarioEncontrado._id);
            window.location.replace('./editar-informacoes.html');
        } else {
            displayMessage('Email ou senha incorretos.', 'danger');
        }
    });
}

document
    .getElementById('togglePassword')
    .addEventListener('click', function () {
        const passwordField = document.getElementById('password');
        const type =
            passwordField.getAttribute('type') === 'password'
                ? 'text'
                : 'password';
        passwordField.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
