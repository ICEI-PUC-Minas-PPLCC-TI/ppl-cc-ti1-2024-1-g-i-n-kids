let userId = localStorage.getItem('userId');
let modal = document.getElementById('modal');

if (!userId) {
    alert('Acesso restrito. Por favor, faça login para continuar.');
    window.location.replace('../usuario/login.html');
} else {
    modal.style.opacity = 1;

    function init() {
        let formularioPostagem = document.querySelector('form');
        let btnCadastrarPostagem = document.getElementById(
            'btnCadastrarPostagem'
        );
        let campoNomeAutor = document.getElementById('nome-autor');

        findUserById(userId, (user) => {
            campoNomeAutor.value = user.name;
        });

        btnCadastrarPostagem.addEventListener('click', (e) => {
            let campoTitulo = document.getElementById('titulo-postagem').value;
            let campoLinkImagem = document.getElementById('link-imagem').value;
            let campoTextoPostagem =
                document.getElementById('texto-postagem').value;

            e.preventDefault();

            if (!formularioPostagem.checkValidity()) {
                displayMessage(
                    'Preencha o formulário corretamente.',
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

            if (campoNomeAutor.value.trim().length < 10) {
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
                author: campoNomeAutor.value,
                content: campoTextoPostagem,
                imageLink: campoLinkImagem,
                userId: userId,
            };

            createPost(postagem);

            formularioPostagem.reset();

            findAllUsers((users) => {
                findAllPosts((posts) => {
                    let novaPostagem = posts.find(
                        (post) =>
                            post.title === campoTitulo &&
                            post.content === campoTextoPostagem &&
                            post.userId === userId
                    );

                    if (novaPostagem) {
                        users.forEach((user) => {
                            enviarEmailNovaPublicacao(
                                user.email,
                                user.name,
                                novaPostagem._id,
                                novaPostagem.title,
                                novaPostagem.author
                            );
                        });
                    }
                });
            });
        });
    }

    init();
}
