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

function init() {
    let formularioPostagem = document.querySelector('form');
    let campoNomeAutor = document.getElementById('nome-autor');

    findUserById(userId, (user) => {
        campoNomeAutor.value = user.name;
    });

    formularioPostagem.addEventListener('submit', (e) => {
        e.preventDefault();

        let campoTitulo = document.getElementById('titulo-postagem').value;
        let campoLinkImagem = document.getElementById('link-imagem').value;
        let campoTextoPostagem =
            document.getElementById('texto-postagem').value;

        if (!formularioPostagem.checkValidity()) {
            displayMessage('Preencha o formulário corretamente.', 'warning');
            return;
        }

        if (campoTitulo.trim().length < 5) {
            displayMessage(
                'O título da postagem deve ter pelo menos 5 caracteres.',
                'warning'
            );
            return;
        }

        if (campoNomeAutor.value.trim().length < 10) {
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
            author: campoNomeAutor.value,
            content: campoTextoPostagem,
            imageLink: campoLinkImagem,
            userId: userId,
        };

        createPost(postagem);

        formularioPostagem.reset();

        findUserById(userId, (user) => {
            findAllPosts((posts) => {
                let novaPostagem = posts.find(
                    (post) =>
                        post.title === campoTitulo &&
                        post.content === campoTextoPostagem &&
                        post.userId === userId
                );

                if (novaPostagem) {
                    enviarEmailNovaPublicacao(
                        user.email,
                        user.name,
                        novaPostagem._id,
                        novaPostagem.title,
                        novaPostagem.author
                    );
                }
            });
        });
    });
}
