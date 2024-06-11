function gerarSenhaAleatoria() {
    const caracteres =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?-=[];,./';
    const comprimentoSenha = 10;
    let senha = '';

    for (let i = 0; i < comprimentoSenha; i++) {
        const indiceCaractere = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indiceCaractere);
    }

    return senha;
}

let userId = localStorage.getItem('userId');

if (userId) {
    window.location.replace('./editar-informacoes.html');
} else {
    let db = [];

    findAllUsers((data) => {
        db = data;
        verificarUsuario();
    });

    function verificarUsuario() {
        let formularioRedefinirSenha = document.querySelector('form');
        let botaoRedefinirSenha = document.getElementById(
            'botao-redefinir-senha'
        );

        botaoRedefinirSenha.addEventListener('click', (e) => {
            e.preventDefault();

            let campoEmail = document.getElementById('email').value;

            if (!formularioRedefinirSenha.checkValidity()) {
                displayMessage(
                    'Preencha o formulário corretamente.',
                    'warning'
                );

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
                displayMessage(
                    'O e-mail fornecido não está cadastrado.',
                    'danger'
                );
            }
        });
    }
}
