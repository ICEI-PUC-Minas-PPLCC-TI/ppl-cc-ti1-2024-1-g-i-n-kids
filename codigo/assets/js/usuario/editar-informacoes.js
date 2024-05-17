window.onload = function() {
    let userId = localStorage.getItem('userId');
    let btnEditarDadosUsuario = document.getElementById('editar-Infos');
    btnExcluirConta = document.getElementById('excluir-conta');
    let formularioEdicaoUsuario = document.querySelector('form');


    if (userId) {
        readUsers(data => {
            let usuario = data.find(user => user.id === parseInt(userId));

            document.getElementById('nome').value = usuario.nome;
            document.getElementById('telefone').value = usuario.telefone;
            document.getElementById('email').value = usuario.email;
        });
    }
    else {
        alert('Você precisa fazer login para acessar página!');
    }

    btnEditarDadosUsuario.addEventListener('click', (e) => {
        let campoNome = document.getElementById('nome').value;
        let campoTelefone = document.getElementById('telefone').value;
        let campoEmail = document.getElementById('email').value;
        let campoSenha = document.getElementById('password').value;
        let campoConfirmarSenha = document.getElementById('confirm-password').value;

        e.preventDefault();

        if (!formularioEdicaoUsuario.checkValidity()) {
            displayMessage('Preencha todos os campos corretamente!', 'warning');
            return;
        }

        if (campoSenha !== campoConfirmarSenha) {
            displayMessage('As senhas não se coincidem.', 'warning');
            return;
        }

        let usuario = {
            nome: campoNome,
            telefone: campoTelefone,
            email: campoEmail,
            senha: campoSenha
        }

        updateUser(parseInt(userId), usuario);

        formularioEdicaoUsuario.reset();
    });

    btnExcluirConta.addEventListener('click', () => {
        deleteUser(parseInt(userId), () => {
            localStorage.removeItem('userId');
            alert('Conta excluída com sucesso.');
            window.location.replace('../../index.html');
        });
    });
}