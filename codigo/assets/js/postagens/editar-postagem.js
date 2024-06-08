let userId = localStorage.getItem('userId');
let modal = document.getElementById('modal');

if (!userId) {
    alert('Acesso restrito. Por favor, faça login para continuar.');
    window.location.replace('../usuario/login.html');
} else {
    window.onload = function () {
        modal.style.opacity = 1;

        let editPostId = localStorage.getItem('editPostId');

        let btnEditar = document.getElementById('editar-Infos');
        let formularioEdicao = document.querySelector('form');

        if (editPostId) {
            findAllPosts((data) => {
                let postagem = data.find((post) => post._id === editPostId);

                if (postagem) {
                    document.getElementById('titulo-postagem').value =
                        postagem.title;
                    document.getElementById('nome-autor').value =
                        postagem.author;
                    document.getElementById('link-imagem').value =
                        postagem.imageLink;
                    document.getElementById('texto-postagem').value =
                        postagem.content;
                } else {
                    console.error('Postagem não encontrada');
                }
            });
        }

        btnEditar.addEventListener('click', (e) => {
            let campoTitulo = document.getElementById('titulo-postagem').value;
            let campoNomeAutor = document.getElementById('nome-autor').value;
            let campoLinkImagem = document.getElementById('link-imagem').value;
            let campoTextoPostagem =
                document.getElementById('texto-postagem').value;

            e.preventDefault();

            if (!formularioEdicao.checkValidity()) {
                displayMessage(
                    'Preencha todos os campos corretamente!',
                    'warning'
                );
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
                userId: userId
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
}
