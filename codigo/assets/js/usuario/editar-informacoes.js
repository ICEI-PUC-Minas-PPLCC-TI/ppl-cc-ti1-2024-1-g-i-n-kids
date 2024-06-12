let userId = localStorage.getItem('userId');
let modal = document.getElementById('modal');

if (!userId) {
    alert('Acesso restrito. Por favor, faça login para continuar.');
    window.location.replace('./login.html');
} else {
    window.onload = function () {
        modal.style.opacity = 1;

        let btnEditarDadosUsuario = document.getElementById('editar-Infos');
        let btnExcluirConta = document.getElementById('excluir-conta');
        let formularioEdicaoUsuario = document.querySelector('form');

        if (userId) {
            findUserById(userId, (usuario) => {
                if (usuario) {
                    document.getElementById('nome').value = usuario.name;
                    document.getElementById('telefone').value = usuario.phone;
                    document.getElementById('email').value = usuario.email;
                } else {
                    displayMessage('Usuário não encontrado', 'danger');
                }
            });
        } else {
            alert('Você precisa fazer login para acessar a página!');
        }

        btnEditarDadosUsuario.addEventListener('click', (e) => {
            e.preventDefault();

            let campoNome = document.getElementById('nome').value;
            let campoTelefone = document.getElementById('telefone').value;
            let campoEmail = document.getElementById('email').value;
            let campoSenha = document.getElementById('password').value;
            let campoConfirmarSenha =
                document.getElementById('confirm-password').value;

            if (!formularioEdicaoUsuario.checkValidity()) {
                displayMessage(
                    'Preencha todos os campos corretamente!',
                    'warning'
                );
                return;
            }

            if (campoNome.trim().length < 10) {
                displayMessage(
                    'O nome do usuário deve ter pelo menos 10 caracteres.',
                    'warning'
                );
                return;
            }

            if (campoTelefone.length !== 15) {
                displayMessage(
                    'Insira um número de telefone válido com DDD (formato: (XX) XXXXX-XXXX).',
                    'warning'
                );
                return;
            }

            if (campoSenha.trim().length < 8) {
                displayMessage(
                    'A senha deve conter pelo menos 8 caracteres.',
                    'warning'
                );
                return;
            }

            if (!campoSenha.match(/[0-9]/)) {
                displayMessage(
                    'A senha deve conter pelo menos um número.',
                    'warning'
                );
                return;
            }

            if (!campoSenha.match(/[a-zA-Z]/)) {
                displayMessage(
                    'A senha deve conter pelo menos uma letra.',
                    'warning'
                );
                return;
            }

            if (!campoSenha.match(/[!@#$%^&*(),.?":{}|<>]/)) {
                displayMessage(
                    'A senha deve conter pelo menos um caractere especial.',
                    'warning'
                );
                return;
            }

            if (campoSenha !== campoConfirmarSenha) {
                displayMessage('As senhas não se coincidem.', 'warning');
                return;
            }

            let encryptedPassword = CryptoJS.SHA256(campoSenha).toString();

            let usuario = {
                name: campoNome,
                phone: campoTelefone,
                email: campoEmail,
                password: encryptedPassword,
            };

            updateUser(userId, usuario);

            formularioEdicaoUsuario.reset();

            document.getElementById('nome').value = usuario.name;
            document.getElementById('telefone').value = usuario.phone;
            document.getElementById('email').value = usuario.email;

            displayMessage(
                'Informações do usuário alteradas com sucesso.',
                'success'
            );

            enviarEmailAtualizacaoConta(
                campoEmail,
                usuario.name,
                usuario.phone
            );
        });

        btnExcluirConta.addEventListener('click', () => {
            let campoNome = document.getElementById('nome').value;
            let campoEmail = document.getElementById('email').value;

            deleteUser(userId, () => {
                enviarEmailExclusaoConta(campoEmail, campoNome);
                localStorage.removeItem('userId');
                alert('Conta excluída com sucesso.');

                window.location.replace('../../index.html');
            });
        });
    };
}
