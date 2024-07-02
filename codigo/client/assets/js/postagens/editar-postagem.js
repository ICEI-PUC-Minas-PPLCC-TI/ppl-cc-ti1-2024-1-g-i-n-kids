let userId = localStorage.getItem('userId');

if (!userId) {
    Swal.fire({
        title: 'Acesso restrito',
        text: 'Por favor, faça login para continuar.',
        icon: 'warning',
        confirmButtonColor: '#d6bdff',
    }).then(() => {
        window.location.replace('../usuario/login.html');
    });
}

window.onload = function () {
    let editPostId = localStorage.getItem('editPostId');
    let formularioEdicao = document.querySelector('form');

    if (editPostId) {
        findAllPosts((data) => {
            let postagem = data.find((post) => post._id === editPostId);

            if (postagem) {
                document.getElementById('titulo-postagem').value =
                    postagem.title;
                document.getElementById('nome-autor').value = postagem.author;
                document.getElementById('link-imagem').value =
                    postagem.imageLink;
                document.getElementById('texto-postagem').value =
                    postagem.content;
            } else {
                console.error('Postagem não encontrada');
            }
        });
    }

    formularioEdicao.addEventListener('submit', (e) => {
        e.preventDefault();

        let campoTitulo = document.getElementById('titulo-postagem').value;
        let campoNomeAutor = document.getElementById('nome-autor').value;
        let campoLinkImagem = document.getElementById('link-imagem').value;
        let campoTextoPostagem =
            document.getElementById('texto-postagem').value;

        if (!formularioEdicao.checkValidity()) {
            displayMessage('Preencha todos os campos corretamente.', 'warning');
            return;
        }

        if (campoTitulo.trim().length < 5) {
            displayMessage(
                'O título da postagem deve ter pelo menos 5 caracteres.',
                'warning'
            );
            return;
        }

        if (campoNomeAutor.trim().length < 10) {
            displayMessage(
                'O nome do autor deve ter pelo menos 10 caracteres.',
                'warning'
            );
            return;
        }

        if (!isValidURL(campoLinkImagem)) {
            displayMessage(
                'O link da imagem deve ser uma URL válida.',
                'warning'
            );
            return;
        }

        if (campoTextoPostagem.trim().length < 100) {
            displayMessage(
                'O texto da postagem deve ter pelo menos 100 caracteres.',
                'warning'
            );
            return;
        }

        let postagem = {
            title: campoTitulo,
            author: campoNomeAutor,
            content: campoTextoPostagem,
            imageLink: campoLinkImagem,
            userId: userId,
        };

        updatePost(editPostId, postagem, () => {
            displayMessage(
                'Informações da postagem alteradas com sucesso.',
                'success'
            );
        });

        document.getElementById('titulo-postagem').value = postagem.title;
        document.getElementById('nome-autor').value = postagem.author;
        document.getElementById('link-imagem').value = postagem.imageLink;
        document.getElementById('texto-postagem').value = postagem.content;
    });
};
