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
    let formularioRedefinirSenha = document.querySelector('form');

    formularioRedefinirSenha.addEventListener('submit', (e) => {
        e.preventDefault();

        let campoEmail = document.getElementById('email').value;

        if (!formularioRedefinirSenha.checkValidity()) {
            displayMessage('Preencha o formulário corretamente.', 'warning');

            return;
        }

        const usuarioEncontrado = db.find(
            (usuario) => usuario.email === campoEmail
        );

        if (usuarioEncontrado) {
            let novaSenha = gerarSenhaAleatoria();
            enviarEmailRedefinicaoSenha(
                usuarioEncontrado.email,
                usuarioEncontrado.name,
                novaSenha
            );

            let encryptedPassword = CryptoJS.SHA256(novaSenha).toString();
            let userId = usuarioEncontrado._id;

            let usuario = {
                name: usuarioEncontrado.name,
                phone: usuarioEncontrado.phone,
                email: usuarioEncontrado.email,
                password: encryptedPassword,
            };

            updateUser(userId, usuario);
        } else {
            displayMessage('O e-mail fornecido não está cadastrado.', 'danger');
        }
    });
}
