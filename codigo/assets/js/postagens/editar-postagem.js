window.onload = function() {
    let editPostId = localStorage.getItem('editPostId');
    let btnEditar = document.getElementById('editar-Infos');
    let formularioEdicao = document.querySelector('form');

    if (editPostId) {
        readPost(data => {
            let postagem = data.find(post => post.id === parseInt(editPostId));

            if (postagem) {
                document.getElementById('titulo-postagem').value = postagem.titulo;
                document.getElementById('nome-autor').value = postagem.autor;
                document.getElementById('link-imagem').value = postagem.link_imagem;
                document.getElementById('texto-postagem').value = postagem.descricao;
            }
            else {
                console.error('Postagem não encontrada');
            }
        });
    }

    btnEditar.addEventListener('click', (e) => {
        let campoTitulo = document.getElementById('titulo-postagem').value;
        let campoNomeAutor = document.getElementById('nome-autor').value;
        let campoLinkImagem = document.getElementById('link-imagem').value;
        let campoTextoPostagem = document.getElementById('texto-postagem').value;

        e.preventDefault();

        if (!formularioEdicao.checkValidity()) {
            displayMessage('Preencha todos os campos corretamente!', 'warning');
            return;
        }

        if (campoTitulo.trim().length < 5) {
            displayMessage('O título da postagem deve ter pelo menos 5 caracteres.', 'warning');
            return;
        }

        if (campoNomeAutor.trim().length < 10) {
            displayMessage('O nome do autor deve ter pelo menos 10 caracteres.', 'warning');
            return;
        }

        if (campoTextoPostagem.trim().length < 100) {
            displayMessage('O texto da postagem deve ter pelo menos 100 caracteres.', 'warning');
            return;
        }

        let postagem = {
            titulo: campoTitulo,
            autor: campoNomeAutor,
            descricao: campoTextoPostagem,
            link_imagem: campoLinkImagem
        }

        updatePost(parseInt(editPostId), postagem);

        formularioEdicao.reset();

        document.getElementById('titulo-postagem').value = postagem.titulo;
        document.getElementById('nome-autor').value = postagem.autor;
        document.getElementById('link-imagem').value = postagem.link_imagem;
        document.getElementById('texto-postagem').value = postagem.descricao;

        displayMessage('Informações da postagem alteradas com sucesso.', 'success');
    });
};