let userId = localStorage.getItem('userId');

if (!userId) {
    Swal.fire({
        title: 'Acesso restrito',
        text: 'Por favor, faça login para continuar.',
        icon: 'warning',
        confirmButtonColor: '#d6bdff',
    }).then(() => {
        window.location.replace('./login.html');
    });
}

window.onload = function () {
    let btnExcluirConta = document.getElementById('excluir-conta');
    let formularioEdicaoUsuario = document.querySelector('form');

    if (userId) {
        findUserById(userId, (usuario) => {
            if (usuario) {
                document.getElementById('nome').value = usuario.name;
                document.getElementById('telefone').value = usuario.phone;
                document.getElementById('email').value = usuario.email;
            } else {
                displayMessage('Usuário não encontrado.', 'danger');
            }
        });
    }

    formularioEdicaoUsuario.addEventListener('submit', (e) => {
        e.preventDefault();

        let campoNome = document.getElementById('nome').value;
        let campoTelefone = document.getElementById('telefone').value;
        let campoEmail = document.getElementById('email').value;
        let campoSenha = document.getElementById('password').value;
        let campoConfirmarSenha =
            document.getElementById('confirm-password').value;

        if (!formularioEdicaoUsuario.checkValidity()) {
            displayMessage('Preencha todos os campos corretamente.', 'warning');
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

        enviarEmailAtualizacaoConta(campoEmail, usuario.name, usuario.phone);
    });

    btnExcluirConta.addEventListener('click', async () => {
        const result = await Swal.fire({
            title: 'Confirmação de exclusão',
            text: 'Você está prestes a excluir sua conta. Esta ação é irreversível. Tem certeza de que deseja continuar?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff6d28',
            cancelButtonColor: '#b5dbff',
            confirmButtonText: 'Sim, excluir conta',
        });

        if (result.isConfirmed) {
            let campoNome = document.getElementById('nome').value;
            let campoEmail = document.getElementById('email').value;

            await new Promise((resolve) => setTimeout(resolve, 3000));

            deleteUser(userId, () => {
                enviarEmailExclusaoConta(campoEmail, campoNome);
                localStorage.removeItem('userId');
            });

            await Swal.fire({
                title: 'Conta excluída!',
                text: 'Suas informações foram excluídas com sucesso.',
                icon: 'success',
                confirmButtonColor: '#d6bdff',
            });

            window.location.replace('../../index.html');
        }
    });
};
